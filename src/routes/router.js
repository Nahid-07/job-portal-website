import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Apply from "../pages/apply/Apply";
import ContactUs from "../pages/contact/ContactUs";
import HomePage from "../pages/Home-page-content/HomePage";
import SignIn from "../pages/signAndLogin/SignIn";
import SignUp from "../pages/signAndLogin/SignUp";
import PrivetRoute from "./privetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path : "/",
                element : <HomePage></HomePage>
            },
            {
                path : '/signin',
                element: <SignIn></SignIn>
            },
            {
                path : '/signup',
                element: <SignUp></SignUp>
            },
            {
                path : '/apply',
                element: <PrivetRoute><Apply></Apply></PrivetRoute>
            },
            {
                path : '/contact-us',
                element: <ContactUs></ContactUs>
            },
        ]
    }
])