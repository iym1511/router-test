import { Link } from "react-router-dom";

const Nav = () => {
    return (  
        <div>
            <Link to="/Home">Home이동 </Link>
            <Link to="/About">About이동 </Link>
            <Link to="/Product">Product이동 </Link>
            <hr />
        </div>
    );
}
 
export default Nav;