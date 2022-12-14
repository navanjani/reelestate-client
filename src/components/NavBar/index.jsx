import { NavLink } from "react-router-dom";
import "./navbar.scss";

const NavBar = ({ language }) => {
  return (
    <div className="nav-bar-container container-fluid">
      <div className="nav-bar-items">
        <div className="nav-bar-links">
          <ul>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="/"
            >
              <li>Home</li>
            </NavLink>
            |
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="/listing"
            >
              <li>Listings</li>
            </NavLink>
            |
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="/viewing"
            >
              <li>Schedule Viewings</li>
            </NavLink>
            |
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to={`/about/${language}`}
            >
              <li>About Us</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};
export { NavBar };
