import {useRoutes} from "react-router-dom"
import SignUp from "./pages/sign_up/sign_up";

const Router = () => {
    return useRoutes([
        {
            path: "/", element : ""
        },
        {
            path: "/sign_up", element: <SignUp/>
        }
    ])
}

export default Router