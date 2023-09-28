import Home from "../pages/Home"
import Shop from "../pages/Shop/Index"
import ProductDetail from "../pages/Product"
import Login from "../pages/Login/SignIn"
import Register from "../pages/Login/Register"
interface IPramsRoute{
    path:string
    element:JSX.Element 
}

export const RoutePage:IPramsRoute[]=[
    {path:'/',element:<Home />},
    {path:'/Shop',element:<Shop />},
    {path:'/ProductDetail/:id',element:<ProductDetail/>},
    {path:'/Login',element:<Login/>},
    {path:'/Register',element:<Register/>},
]