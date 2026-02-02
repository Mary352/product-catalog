import type { CartLinkProps } from "@/models/Cart/client"
import { Link } from "@chakra-ui/react"
import { Box, Circle, Float } from "@chakra-ui/react"
import { LuShoppingCart } from "react-icons/lu"

const CartLink = ({ countInCart }: CartLinkProps) => {

   return (<Link href="/cart">
      <Box position="relative" _hover={{ color: "var(--main-links-color)", opacity: "0.5" }}>
         <LuShoppingCart size="30" />
         {countInCart > 0 && <Float>
            <Circle size="5" bg="red" color="white">
               {countInCart}
            </Circle>
         </Float>}
      </Box>
   </Link>)
}

export default CartLink