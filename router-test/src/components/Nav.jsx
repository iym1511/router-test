import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (  
        <div>
            <NavLink to="/Home" style={({isActive})=>(
                isActive ? {color :"green", fontWeight : "bold"} : undefined
                )}>Home이동 </NavLink>{" "}
            <NavLink to="/About"style={({isActive})=>(
                isActive ? {color :"green", fontWeight : "bold"} : undefined
                )}>About이동 </NavLink>{" "}
            <NavLink to="/Product"style={({isActive})=>(
                isActive ? {color :"green", fontWeight : "bold"} : undefined
                )}>Product이동 </NavLink>{" "}
            <hr />
        </div>
    );
}
 
export default Nav;