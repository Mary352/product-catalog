import { EmptyState, Link, VStack } from "@chakra-ui/react"
import { LuShoppingCart } from "react-icons/lu"

const CartPage = () => {
   return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <LuShoppingCart />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Корзина пуста</EmptyState.Title>
          <EmptyState.Description>
            Выберите товары в <Link href="/">каталоге</Link>
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
    )
}

export default CartPage