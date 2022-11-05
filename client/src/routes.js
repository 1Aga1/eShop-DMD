import {useRoutes} from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

const Router = () => {
    return useRoutes([
        {
            path: "/", element : <SignIn/>
        },
        {
            path: "/SignIn", element : <SignIn/>
        },
        {
            path: "/SignUp", element: <SignUp/>
        }
    ])
}

export default Router