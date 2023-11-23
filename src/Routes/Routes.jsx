import {
    createBrowserRouter,
    
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import ContactHome from "../Pages/Contact/ContactHome/ContactHome";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element : <Home></Home>
            },
            {
                path: "/menu",
                element : <Menu></Menu>
            },
            {
                path: "/order",
                element : <Order></Order>
            },
            {
                path: "/contact",
                element : <ContactHome></ContactHome>
            },
            {
                path: "/login",
                element : <Login></Login>
            },
            {
                path: "/signUp",
                element : <SignUp></SignUp>
            }
        ]
    },
]);