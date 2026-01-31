import { Container } from "@chakra-ui/react"
import Header from "../dummies/Header"
import { useLocalStorage } from "usehooks-ts"
import type { ProductWithAmount } from "@/models/Products/client"
import { createContext, useState} from "react"

export const CountInCartContext = createContext<(value: number) => void>(() => {});

const PageLayout = ({ children }: { children: React.ReactNode }) => {
   const [products] = useLocalStorage<ProductWithAmount[]>("products", [])
   const [countInCart, setCountInCart] = useState<number>(products.length)

   return <Container>
      <CountInCartContext value={setCountInCart}>
         <Header countInCart={countInCart} />
         {children}
      </CountInCartContext>
   </Container>
}

export default PageLayout