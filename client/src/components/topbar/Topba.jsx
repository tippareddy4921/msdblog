import { Link, Outlet } from "react-router-dom"
import "./topbar.css"
import { useContext } from "react"
import { Context } from "../../context/Context"

export default function Topba() {
    const {user,dispatch}=useContext(Context);

    const handleLogout=()=>{
        dispatch({type:"LOGOUT"});
    }
    return (
        <>
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-x-twitter"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-facebook"></i> 
            <i className="topIcon fa-brands fa-square-pinterest"></i></div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="toplistItem"><Link to={"/"}>HOME</Link></li>
                    <li className="toplistItem"><Link to={"/sidebar"}>ABOUT</Link></li>
                    <li className="toplistItem"><Link to={"/"}>CONTACT</Link></li>
                    <li className="toplistItem"><Link to={"/write"}>WRITE</Link></li>
                    <li className="toplistItem" onClick={handleLogout}><Link>{user&&"LOGOUT"}</Link></li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user?(
                        <img 
                    className="topImage"
                    src={user.profilePic} 
                    alt="" />
                    ):(
                        <ul className="topList">
                        <li className="toplistItem">
                        <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="toplistItem">
                        <Link className="link" to="/register">REGISTER</Link>
                        </li>
                        </ul>
                    )
                
                }
                
                
                <Link to={"/settings"}>
                <i className="topSearchIcon fa-brands fa-searchengin"></i>
                </Link>
            </div>
        </div>
        <Outlet/>
        </>
    )
}


