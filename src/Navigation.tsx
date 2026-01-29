import { Routes, Route } from "react-router";
import CatalogPage from "./views/CatalogPage/CatalogPage";
import CartPage from "./views/CartPage/CartPage";

const Navigation = () => {
   return <>
      <Routes>
         <Route path="/">
            <Route index element={<CatalogPage/>}></Route>
         </Route>
         <Route path="/cart">
            <Route index element={<CartPage/>}></Route>
         </Route>
      </Routes>
   </>
}

export default Navigation