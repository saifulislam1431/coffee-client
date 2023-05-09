import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import CoffeeDetails from "../Pages/CoffeeDetails/CoffeeDetails";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch("https://coffee-server-chi.vercel.app/coffees")
            },
            {
                path: "addCoffee",
                element:<AddCoffee></AddCoffee>
            },
            {
                path:"coffeeDetails/:id",
                element:<CoffeeDetails></CoffeeDetails>,
                loader: ({params})=> fetch(`https://coffee-server-chi.vercel.app/coffees/${params.id}`)
            },
            {
                path:"updateCoffee/:id",
                element:<UpdateCoffee></UpdateCoffee>,
                loader: ({params})=> fetch(`https://coffee-server-chi.vercel.app/coffees/${params.id}`)
            }
        ]
    }
])

export default router;