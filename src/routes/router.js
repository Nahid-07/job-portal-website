import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/Home-page-content/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path : "/",
                element : <HomePage></HomePage>
            },
        ]
    }
])