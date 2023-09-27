import logo from "../assets/images/login.svg";
import classes from "../style/Illustration.module.css";
export default function LoginIllustration() {
  return (
    <div class={classes.illustration}>
      <img src={logo} alt="Login" />
    </div>
  );
}
