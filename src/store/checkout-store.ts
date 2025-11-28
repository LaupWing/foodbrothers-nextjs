import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CheckoutFormData {
  postalCode: string;
  houseNumber: string;
  streetName: string;
  city: string;
  name: string;
  phone: string;
  email: string;
  companyName: string;
  orderNote: string;
  deliveryTime: string;
  paymentMethod: string;
  discountCode: string;
  shippingMethod: "delivery" | "pickup";
}

interface CheckoutStore {
  formData: CheckoutFormData;
  updateFormData: (data: Partial<CheckoutFormData>) => void;
  setShippingMethod: (method: "delivery" | "pickup") => void;
  resetForm: () => void;
}

const initialFormData: CheckoutFormData = {
  postalCode: "",
  houseNumber: "",
  streetName: "",
  city: "",
  name: "",
  phone: "",
  email: "",
  companyName: "",
  orderNote: "",
  deliveryTime: "",
  paymentMethod: "ideal",
  discountCode: "",
  shippingMethod: "delivery",
};

export const useCheckoutStore = create<CheckoutStore>()(
  persist(
    (set) => ({
      formData: initialFormData,

      updateFormData: (data) => {
        set((state) => ({
          formData: { ...state.formData, ...data },
        }));
      },

      setShippingMethod: (method) => {
        set((state) => ({
          formData: { ...state.formData, shippingMethod: method },
        }));
      },

      resetForm: () => {
        set({ formData: initialFormData });
      },
    }),
    {
      name: "foodbrothers-checkout",
    }
  )
);
