import classes from "../../style/Login.module.css";
import Button from "../Button";
import LoginFrom from "../LoginFrom";
import LoginIllustration from "../LoginIllustration";
import TestInput from "../TestInput";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <LoginIllustration />
        <LoginFrom className={`${classes.login}`}>
          <TestInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TestInput type="password" placeholder="Enter Password" icon="lock" />
          <Button>Submit Now</Button>
          <div class="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </LoginFrom>
      </div>
    </>
  );
}
