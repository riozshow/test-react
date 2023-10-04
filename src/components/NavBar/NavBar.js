import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  const isActive = ({ isActive }) => (isActive ? styles.isActive : null);
  return (
    <nav>
      <i className={`${styles.navIcon} fas fa-tasks`}></i>
      <ul>
        <NavLink className={isActive} to="/">
          Home
        </NavLink>
        <NavLink className={isActive} to="/favorite">
          Favorite
        </NavLink>
        <NavLink className={isActive} to="/about">
          About
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
