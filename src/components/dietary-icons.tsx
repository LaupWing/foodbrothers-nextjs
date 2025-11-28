import { Wheat, Egg, Milk, Leaf, Bean } from "lucide-react"

// Dietary/Allergen icon types
export type DietaryType = "halal" | "egg" | "gluten" | "milk" | "mustard" | "celery" | "sesame" | "soy"

interface DietaryIconsProps {
  items: DietaryType[]
  showLabels?: boolean
  size?: "sm" | "md"
}

// Custom Halal icon since lucide doesn't have one
function HalalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="bold">
        H
      </text>
    </svg>
  )
}

// Custom Mustard icon
function MustardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C8 2 6 4 6 7v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7c0-3-2-5-6-5zm-2 9c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2h-4z" />
    </svg>
  )
}

// Custom Sesame icon
function SesameIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="8" cy="8" r="2" />
      <circle cx="16" cy="8" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="8" cy="16" r="2" />
      <circle cx="16" cy="16" r="2" />
    </svg>
  )
}

const iconConfig = {
  halal: {
    icon: HalalIcon,
    label: "HALAL",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  egg: {
    icon: Egg,
    label: "EI",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  gluten: {
    icon: Wheat,
    label: "GLUTEN",
    color: "text-yellow-700",
    bg: "bg-yellow-50",
  },
  milk: {
    icon: Milk,
    label: "MELK",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  mustard: {
    icon: MustardIcon,
    label: "MOSTERD",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  celery: {
    icon: Leaf,
    label: "SELDERIJ",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  sesame: {
    icon: SesameIcon,
    label: "SESAMZAAD",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  soy: {
    icon: Bean,
    label: "SOJA",
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
}

export function DietaryIcons({ items, showLabels = true, size = "md" }: DietaryIconsProps) {
  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
  const textSize = size === "sm" ? "text-[10px]" : "text-xs"
  const padding = size === "sm" ? "px-1.5 py-0.5" : "px-2 py-1"

  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => {
        const config = iconConfig[item]
        const Icon = config.icon
        return (
          <div key={item} className={`flex items-center gap-1 ${padding} rounded-md ${config.bg} ${config.color}`}>
            <Icon className={iconSize} />
            {showLabels && <span className={`${textSize} font-medium`}>{config.label}</span>}
          </div>
        )
      })}
    </div>
  )
}
