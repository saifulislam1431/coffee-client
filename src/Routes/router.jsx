import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import CoffeeDetails from "../Pages/CoffeeDetails/CoffeeDetails";

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
            },
            {
                path:"coffeeDetails/:id",
                element:<CoffeeDetails></CoffeeDetails>,
                loader: ({params})=> fetch(`http://localhost:7000/coffees/${params.id}`)
            }
        ]
    }
])

export default router;