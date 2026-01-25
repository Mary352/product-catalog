import { Routes, Route } from "react-router";
import CatalogPage from "./views/CatalogPage/CatalogPage";

const Navigation = () => {
   return <>
      <Routes>
         <Route path="/">
            <Route index element={<CatalogPage/>}></Route>
         </Route>
      </Routes>
   </>
}

export default Navigation