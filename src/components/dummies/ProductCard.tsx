import type { ProductCardProps, ProductWithAmount } from "@/models/Products/client"
import { Button, Card, Image, Text } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { toaster } from "../ui/toaster"
import { CountInCartContext } from "../layout/PageLayout"

const ProductCard = ({ product }: ProductCardProps) => {
   const productInStock = product.rating.count
   const [isInCart, setIsInCart] = useState(findProduct())
   const setCountInCart = useContext(CountInCartContext);

   function findProduct() {
      const productsJSON = localStorage.getItem(`products`) 
      if (!productsJSON) {
         return false
      }

      const products = JSON.parse(productsJSON)
      return products.some((prod: ProductWithAmount) => 
         prod.id === product.id)      
   }

   function addToCart() {
      const productsJSON = localStorage.getItem(`products`)
      let products: ProductWithAmount[] = []
      if (productsJSON) {
         products = JSON.parse(productsJSON)
      }

      products.push({
         ...product,
         amount: 1
      })
      
      localStorage.setItem(`products`, JSON.stringify(products))

      setIsInCart(true)
      setCountInCart(products.length)

      toaster.create({
         duration: 2000,
         title: "Товар добавлен в корзину",
         type: "success",
      })
   }

   return (
      <Card.Root opacity={productInStock > 0 ? 1 : 0.6} maxW="sm" h="100%" overflow="hidden">
         <Image
            fit="scale-down"
            h="250px"
            src={product.image}
            // src={product.images[0]}
            alt={product.title}
         />
         <Card.Body gap="2">
            <Card.Title lineClamp="1">{product.title}</Card.Title>
            <Card.Description lineClamp="3">{product.description}</Card.Description>
         </Card.Body>
         <Card.Footer gap="4" flexDirection="column" alignItems="start">
            <Text justifySelf="end" textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">{product.price && `${product.price}$`}</Text>
            <Text fontSize="0.875rem" color="#1560BD">{productInStock > 0 ? `Осталось ${productInStock} шт.` : "Нет в наличии"} </Text>

            {/* {isInCart ? <Text color="green" justifySelf="end" textStyle="2xl" fontWeight="medium" letterSpacing="tight">Уже в корзине</Text>
               : <Button variant="solid" onClick={addToCart}>Добавить в корзину</Button>} */}
            <Button variant="solid" onClick={addToCart} disabled={isInCart}>Добавить в корзину</Button>
         </Card.Footer>
      </Card.Root>
   )
}

export default ProductCard