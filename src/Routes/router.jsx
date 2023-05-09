import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch("http://localhost:7000/coffees")
            },
            {
                path: "addCoffee",
                element:<AddCoffee></AddCoffee>
            }
        ]
    }
])

export default router;