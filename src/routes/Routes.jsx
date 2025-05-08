import { createBrowserRouter } from "react-router-dom";

import Layout from '../layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';
import Signin from '../pages/Signin';
import Signup from "../pages/Signup";
import UserProfile from "../pages/UserProfile";
import ResetPassword from "../pages/ResetPassword";
import TermsOfUse from "../pages/TermsOfUse";
import Disclaimer from "../pages/Dislclaimer";
import PrivacyPolicies from "../pages/PrivacyPolicies";
import Faq from "../pages/Faq";
import Dashboard from "../pages/Dashboard";


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
            path: '/signin', element: <Signin />
        },
        {
            path: '/signup', element: <Signup />
        },
        {
            path: '/resetpassword', element: <ResetPassword />
        },
        {
            path: '/termsofuse', element: <TermsOfUse />
        },
        {
            path: '/disclaimer', element: <Disclaimer />
        },
        {
            path: '/privacypolicies', element: <PrivacyPolicies />
        },
        {
            path: '/faq', element: <Faq />
        },
        {
            path: '/userprofile', element: <UserProfile />
        },
        {
            path: '/dashboard', element: <Dashboard />
        }

    ]
}])

export default Router;