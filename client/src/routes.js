import {useRoutes} from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import General from "./pages/General/General";

const Router = () => {
    return useRoutes([
        {
            path: "/", element : <SignIn/>
        },
        {
            path: "/signin", element : <SignIn/>
        },
        {
            path: "/signup", element: <SignUp/>
        },
        {
            path: "/general", element: <General/>
        }
    ])
}

export default Router