import ProductCardHorizontal from "@/components/dummies/ProductCardHorizontal"
import PageLayout from "@/components/layout/PageLayout"
import type { ProductWithAmount } from "@/models/Products/client"
import { EmptyState, Flex, Heading, Link, VStack } from "@chakra-ui/react"
import { LuShoppingCart } from "react-icons/lu"
import { useLocalStorage } from 'usehooks-ts'

const CartPage = () => {
   const [products, setProducts, removeValue] = useLocalStorage<ProductWithAmount[]>("products", [])

   if (products.length === 0) {
      return (<PageLayout>
         <Flex h="100svh" w="100%" alignItems="center">
            <EmptyState.Root>
               <EmptyState.Content>
                  <EmptyState.Indicator>
                     <LuShoppingCart />
                  </EmptyState.Indicator>
                  <VStack textAlign="center">
                     <EmptyState.Title>Корзина пуста</EmptyState.Title>
                     <EmptyState.Description>
                        Выберите товары в <Link href="/" color="purple">каталоге</Link>
                     </EmptyState.Description>
                  </VStack>
               </EmptyState.Content>
            </EmptyState.Root>
         </Flex>
      </PageLayout>)
   }

   return (<PageLayout>
      <Flex gap={4} pt="2.5rem">
         <Heading size={"3xl"} mb={7}>Итого</Heading>
         <Heading size={"3xl"}>{products.reduce((accum, curVal) => accum + curVal.price * curVal.amount, 0).toFixed(2)}$</Heading>
      </Flex>
      <div style={{ width: "60%" }}>
         {products.map(prod => <ProductCardHorizontal key={prod.id} product={prod} products={products} setProducts={setProducts} />)}
      </div>
   </PageLayout>
   )
}

export default CartPage