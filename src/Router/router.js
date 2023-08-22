import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: ([
            { path: "/", element: <Home></Home> },
            { path: "/rooms", element: <PrivateRoute><Rooms></Rooms></PrivateRoute> },
            { path: "/about", element: <PrivateRoute><About></About></PrivateRoute> },
            { path: "/contact", element: <Contact></Contact> },
            { path: "/service", element: <PrivateRoute><Services></Services></PrivateRoute> },


        ])
    },
    { path: "/login", element: <Login></Login> },
    { path: "/signup", element: <Signup></Signup> },
])
