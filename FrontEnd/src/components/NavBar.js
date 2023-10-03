import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul className="NavBar">
        <li>
          <NavLink className={"navlink"} to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={"navlink"} to={"/About"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={"navlink"} to={"/Contact"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
