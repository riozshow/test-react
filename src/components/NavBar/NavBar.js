import "./NavBar.module.scss";
import NavLink from "../NavLink/NavLink";

function NavBar() {
  return (
    <nav>
      <i class={`fas fa-tasks`}></i>
      <ul>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/favorite">Favorite</NavLink>
        <NavLink href="/about">About</NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
