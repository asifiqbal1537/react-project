import logo from "../assets/images/logo-bg.png";
import classes from "../style/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Welcome to my project" />
            <h3>Welcome to my project</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
