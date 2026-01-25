import type { ProductCardProps } from "@/models/Products/client"
import { Button, Card, Image, Text } from "@chakra-ui/react"

const ProductCard = ({ product }: ProductCardProps) => {
   return (
      <Card.Root key={product.id} maxW="sm" h="100%" overflow="hidden">
         <Image 
            fit="scale-down" 
            maxH="250px"
            src={product.image}
            alt={product.title}
         />
         <Card.Body gap="2">
            <Card.Title lineClamp="1">{product.title}</Card.Title>
            <Card.Description lineClamp="3">{product.description}</Card.Description>
         </Card.Body>
         <Card.Footer gap="4" flexDirection="column" alignItems="start">
            <Text justifySelf="end" textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">{product.price && `${product.price}$`}</Text>
            <Button variant="solid">Добавить в корзину</Button>
         </Card.Footer>
      </Card.Root>
   )
}

export default ProductCard