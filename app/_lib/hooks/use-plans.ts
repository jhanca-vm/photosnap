import { useState } from 'react'

export default function usePlans() {
  const [isYearly, setIsYearly] = useState(false)

  return {
    isYearly,
    setIsYearly,
    calculatePrice(value: string) {
      const price = isYearly ? Number(value) * 12 : Number(value)
      return price.toFixed(2)
    }
  }
}
