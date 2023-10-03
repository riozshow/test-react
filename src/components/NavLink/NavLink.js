import "./NavLink.module.scss";
import { Link } from "react-router-dom";

function NavLink({ children, href }) {
  return (
    <li>
      <Link to={href}>{children}</Link>
    </li>
  );
}

export default NavLink;
