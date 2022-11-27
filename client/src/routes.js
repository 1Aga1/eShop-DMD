import {useRoutes} from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import General from "./pages/General/General";
import GamePage from "./pages/GamePage/GamePage";

const Router = () => {
    return useRoutes([
        {
            path: "/", element : <General/>
        },
        {
            path: "/signin", element : <SignIn/>
        },
        {
            path: "/signup", element: <SignUp/>
        },
        {
            path: "/general", element: <General/>
        },
        {
            path: "/game/id:number", element: <GamePage/>
        }
    ])
}

export default Router