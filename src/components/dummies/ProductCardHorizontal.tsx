import type { ProductCardHorizontalProps } from "@/models/Products/client"
import { Box, Card, IconButton, Image, type NumberInputValueChangeDetails } from "@chakra-ui/react"
import { LuTrash2 } from "react-icons/lu"
import AmountInput from "./AmountInput"
import { useContext } from "react"
import { CountInCartContext } from "../layout/PageLayout"
import { countProductsInCart } from "@/utils/helpers/productsHelpers"

const ProductCardHorizontal = ({ product, products, setProducts }: ProductCardHorizontalProps) => {
   const setCountInCart = useContext(CountInCartContext);

   function deleteFromCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      const filteredProductsArr = products.filter(prod => prod.id !== product.id)
      setProducts(filteredProductsArr)
      setCountInCart(countProductsInCart(filteredProductsArr))
   }

   function changeCounterValue(e: NumberInputValueChangeDetails) {
      const indexOfCurrentProduct = products.findIndex(prod => prod.id === product.id)
      products[indexOfCurrentProduct].amount = e.valueAsNumber
      setProducts([...products])
      setCountInCart(countProductsInCart(products))
   }

   return (
      <Card.Root w="100%" flexDirection="row" overflow="hidden">
         <Image
            objectFit="scale-down"
            maxW="100px"
            src={product.image}
            alt={product.title}
         />
         <Box>
            <Card.Body>
               <Card.Title mb="2">{product.price && `${(product.price * product.amount).toFixed(2)}$`}</Card.Title>
               <Card.Description>{product.title}</Card.Description>
            </Card.Body>
            <Card.Footer>
               <IconButton variant="ghost" aria-label="Delete product from cart" onClick={deleteFromCart}>
                  <LuTrash2 />
               </IconButton>
               <AmountInput amount={product.amount} changeCounterValue={changeCounterValue} countInStock={product.rating.count} />
            </Card.Footer>
         </Box>
      </Card.Root>
   )
}

export default ProductCardHorizontal