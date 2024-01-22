import { NavLink} from "react-router-dom";
import "./NavBar.css";

function NavBar({ logout }) {

  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link" 
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <button onClick={logout}>Logout</button> { /* Add the logout function to handle the onClick event */ }
    </nav>
  );
}

export default NavBar;
