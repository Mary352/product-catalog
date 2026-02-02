import { Flex, Grid, GridItem, Heading, Link } from "@chakra-ui/react"
import CartLink from "./CartLink"
import { ColorModeButton } from "@/components/ui/color-mode"

const Header = ({ countInCart }: { countInCart: number }) => {
   return (<Grid
      borderBottom="1px solid var(--chakra-colors-gray-200)"
      padding="0.625rem 3rem"
      justifyContent="space-between"
      templateColumns="1fr auto auto"
      alignItems="center"
   >
      <GridItem><Link href="/" _hover={{ opacity: "0.5", textDecoration: "none" }}><Heading size="3xl" color="var(--main-links-color)">Каталог</Heading></Link></GridItem>
      <GridItem mr="1.5rem"><CartLink countInCart={countInCart} /></GridItem>
      <GridItem><ColorModeButton _dark={{ _hover: { color: "#9FD0D6" } }} _hover={{ color: "#E19D29" }} _icon={{ width: "30px", height: "30px" }} /></GridItem>
   </Grid>)
}

export default Header