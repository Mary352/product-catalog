import type { NumberInputValueChangeDetails } from "@chakra-ui/react"
import type { ProductWithAmount } from "../Products/client"

export type CartLinkProps = {
   countInCart: number,
}

export type AmountInputProps = {
   amount: number,
   changeCounterValue: (e: NumberInputValueChangeDetails) => void,
   countInStock: number
}

export interface CustomCart {
   products?: ProductWithAmount[],
   totalCost: number,
}