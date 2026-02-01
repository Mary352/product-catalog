import { Flex, Heading, Link } from "@chakra-ui/react"
import CartLink from "./CartLink"

const Header = ({ countInCart }: { countInCart: number }) => {
   return (<Flex
      borderBottom="1px solid var(--chakra-colors-gray-200)"
      padding="0.5rem 3rem"
      justifyContent="space-between"
   >
      <Link href="/" _hover={{ opacity: "0.5", textDecoration: "none" }}><Heading size="3xl" color="purple">Каталог</Heading></Link>
      <CartLink countInCart={countInCart} />
   </Flex>)
}

export default Header