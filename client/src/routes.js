import {useRoutes} from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import General from "./pages/General/General";
import GamePage from "./pages/GamePage/GamePage";
import Favourites from './pages/Favourites/Favourites'
import Basket from "./pages/Basket/Basket";

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
        },
        {
            path: "/favourites", element: <Favourites/>
        },
        {
            path: "/basket", element: <Basket/>
        }
    ])
}

export default Router