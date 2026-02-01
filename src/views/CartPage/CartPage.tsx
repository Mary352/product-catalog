import ProductCardHorizontal from "@/components/dummies/ProductCardHorizontal"
import PageLayout from "@/components/layout/PageLayout"
import type { ProductWithAmount } from "@/models/Products/client"
import { Flex, Heading, Link } from "@chakra-ui/react"
import { LuShoppingCart } from "react-icons/lu"
import { useLocalStorage } from 'usehooks-ts'
import { EmptyPage } from "../EmptyPage/EmptyPage"

const CartPage = () => {
   const [products, setProducts, removeValue] = useLocalStorage<ProductWithAmount[]>("products", [])

   if (products.length === 0) {
      return <EmptyPage
         title="Корзина пуста"
         icon={<LuShoppingCart />}
         description={<>Выберите товары в <Link href="/" color="purple">каталоге</Link></>}
      />
   }

   return (<PageLayout>
      <Heading textAlign="center" size="3xl" pt="2.5rem" mb="1rem">Оформление заказа</Heading>
      <Flex gap="1rem" justifyContent="center">
         <Heading size="2xl" mb="1.75rem">Итого</Heading>
         <Heading size="2xl">{products.reduce((accum, curVal) => accum + curVal.price * curVal.amount, 0).toFixed(2)}$</Heading>
      </Flex>
      <Flex maxW="760px" m="0 auto" direction="column" gap="0.25rem" pb="5rem">
         {products.map(prod => <ProductCardHorizontal key={prod.id} product={prod} products={products} setProducts={setProducts} />)}
      </Flex>
   </PageLayout>
   )
}

export default CartPage