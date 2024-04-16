import Home from "./pages/home/Home";
import Topba from "./components/topbar/Topba";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Post from "./components/post/Post";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Singlepost from "./components/singlepost/Singlepost";
import { useContext } from "react";
import { Context } from "./context/Context";




function App(){
    const {user}=useContext(Context);
    const router=createBrowserRouter([
        {
            path:"/",
            element:<Topba/>,
            children:
            [
                {
                    index:true,
                    element: <Home/>
                },
                {
                    path:"/sidebar",
                    element:<Sidebar/>
                },
                {
                    path:"/write",
                    element:user?<Write/>:<Register/>
                },
                {
                    path:"/settings",
                    element:user?<Settings/>:<Register/>
                },
                {
                    path:"/register",
                    element:user?<Home/>:<Register/>
                },
                
                {
                    path:"/login",
                    element:user?<Home/>:<Login/>
                },
                {
                    path:"/singlepost",
                    element:<Singlepost/>
                },
                {
                    path:"/single",
                    element:<Single/>
                },{
                    path:"/post/:postId",
                    element:<Singlepost/>
                }
            ]
        }
    ])
    return(
        <RouterProvider router={router}/>
    );
}

export default App;

