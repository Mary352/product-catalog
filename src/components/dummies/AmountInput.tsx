import type { AmountInputProps } from "@/models/Products/client"
import { HStack, IconButton, NumberInput } from "@chakra-ui/react"
import { LuMinus, LuPlus } from "react-icons/lu"

const AmountInput = ({ amount, changeCounterValue, countInStock }: AmountInputProps) => {
   return (
      <NumberInput.Root defaultValue="1" min={1} max={countInStock} value={`${amount}`} onValueChange={changeCounterValue} unstyled spinOnPress={false}>
         <HStack gap="2">
            <NumberInput.DecrementTrigger asChild>
               <IconButton variant="outline" size="sm">
                  <LuMinus />
               </IconButton>
            </NumberInput.DecrementTrigger>
            <NumberInput.Input textAlign="center" fontSize="lg" w="3ch" focusRing="none" />
            <NumberInput.IncrementTrigger asChild>
               <IconButton variant="outline" size="sm">
                  <LuPlus />
               </IconButton>
            </NumberInput.IncrementTrigger>
         </HStack>
      </NumberInput.Root>
   )
}

export default AmountInput