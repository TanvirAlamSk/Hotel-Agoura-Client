import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: ([
            { path: "/", element: <Home></Home> },
            { path: "/rooms", element: <Rooms></Rooms> },
            { path: "/about", element: <About></About> },
            { path: "/contact", element: <Contact></Contact> },
            { path: "/service", element: <Services></Services> },


        ])
    },
    { path: "/login", element: <Login></Login> },
    { path: "/signup", element: <Signup></Signup> },
])
