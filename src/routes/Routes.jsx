import { createBrowserRouter } from "react-router-dom";

import Layout from '../layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Pricing from '../pages/Pricing'
import Contact from '../pages/Contact'
import Login from '../pages/Login'


const Router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/', element: <Home />
        },
        {
            path: '/about', element: <About />
        },
        {
            path: '/pricing', element: <Pricing />
        },
        {
            path: '/contact', element: <Contact />
        },
        {
            path: '/login', element: <Login />
        }
    ]
}])

export default Router;