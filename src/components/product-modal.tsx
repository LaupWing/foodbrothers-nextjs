"use client"

import { useState } from "react"
import { X, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DietaryIcons, type DietaryType } from "@/components/dietary-icons"
import { useLanguageStore } from "@/store/language-store"

interface Topping {
  name: string
  price: number
}

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    description: string
    price: number
    dietary: DietaryType[]
    image?: string
    toppings?: Topping[]
  }
  onAddToCart: (product: { name: string; price: number; quantity: number; image?: string; toppings: Topping[] }) => void
  onItemAdded?: () => void
}

export function ProductModal({ isOpen, onClose, product, onAddToCart, onItemAdded }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([])
  const { t } = useLanguageStore()

  if (!isOpen) return null

  const toggleTopping = (topping: Topping) => {
    setSelectedToppings((prev) => {
      const exists = prev.find((t) => t.name === topping.name)
      if (exists) {
        return prev.filter((t) => t.name !== topping.name)
      }
      return [...prev, topping]
    })
  }

  const toppingsTotal = selectedToppings.reduce((sum, t) => sum + t.price, 0)
  const totalPrice = (product.price + toppingsTotal) * quantity

  const handleAddToCart = () => {
    onAddToCart({
      name: product.name,
      price: product.price + toppingsTotal,
      quantity,
      image: product.image,
      toppings: selectedToppings,
    })
    setQuantity(1)
    setSelectedToppings([])
    onClose()
    onItemAdded?.()
  }

  const defaultToppings: Topping[] = product.toppings || [
    { name: "Red cheddar sommerset", price: 1.25 },
    { name: "Smoked BBQ saus", price: 0.75 },
    { name: "Mexican Jalapeño mayonaise", price: 0.75 },
    { name: "Italian Black Truffelmayonaise", price: 1.0 },
    { name: "Kalfspek bio - حلال", price: 2.75 },
    { name: "Mexican Jalapeño schijfjes", price: 0.75 },
    { name: "Belgium sliced pickles (augurken)", price: 0.75 },
    { name: "Handgesneden vleestomaat", price: 0.75 },
    { name: "Maroccan Harissa Mayo", price: 0.75 },
    { name: "Hot spicy indo-saus", price: 0.75 },
    { name: "Rode ui ring", price: 0.75 },
  ]

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-background rounded-2xl w-full max-w-lg max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          aria-label="Close product details"
        >
          <X className="w-5 h-5 text-foreground" aria-hidden="true" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
          {/* Header */}
          <div className="p-6 pb-4">
            <h2 className="text-2xl font-bold text-foreground pr-12">{product.name}</h2>
            <p className="text-xl font-semibold text-primary mt-1">€{product.price.toFixed(2).replace(".", ",")}</p>
            <p className="text-muted-foreground text-sm mt-2">{product.description}</p>
          </div>

          {/* Dietary icons */}
          <div className="mx-6 mb-4">
            <DietaryIcons items={product.dietary} size="sm" />
          </div>

          {/* Toppings section */}
          <div className="px-6 pb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">1) {t.productModal.toppings}</h3>
            <div className="divide-y divide-border">
              {defaultToppings.map((topping) => {
                const isSelected = selectedToppings.some((t) => t.name === topping.name)
                return (
                  <div
                    key={topping.name}
                    className="flex items-center justify-between py-4 cursor-pointer hover:bg-muted/30 -mx-2 px-2 rounded-lg transition-colors"
                    onClick={() => toggleTopping(topping)}
                  >
                    <span className={`text-sm ${isSelected ? "font-semibold text-primary" : "text-foreground"}`}>
                      {topping.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">
                        + €{topping.price.toFixed(2).replace(".", ",")}
                      </span>
                      <button
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                        aria-label={isSelected ? `Remove ${topping.name}` : `Add ${topping.name}`}
                        aria-pressed={isSelected}
                      >
                        <Plus className={`w-4 h-4 ${isSelected ? "rotate-45" : ""} transition-transform`} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Fixed bottom bar */}
        <div className="sticky bottom-0 bg-background border-t border-border p-4 flex items-center justify-between gap-4">
          {/* Quantity selector */}
          <div className="flex items-center gap-2" role="group" aria-label="Quantity selector">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4 text-foreground" aria-hidden="true" />
            </button>
            <span className="w-8 text-center font-semibold text-foreground" aria-live="polite">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4 text-foreground" aria-hidden="true" />
            </button>
          </div>

          {/* Add button */}
          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-foreground hover:bg-foreground/90 text-background py-6 rounded-full font-semibold text-base"
          >
            {t.productModal.add} €{totalPrice.toFixed(2).replace(".", ",")}
          </Button>
        </div>
      </div>
    </div>
  )
}
