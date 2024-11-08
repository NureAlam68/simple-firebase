import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink style={{'marginLeft': '20px'}} to="/">Home</NavLink>
            <NavLink style={{'marginLeft': '20px'}} to="/login">Login</NavLink>
        </div>
    );
};

export default Header;