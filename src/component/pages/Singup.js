import classes from "../../style/Singup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import From from "../From";
import Illustration from "../Illustration";
import TestInput from "../TestInput";
export default function Singup() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration />
        <From className={`${classes.signup}`}>
          <TestInput type="text" placeholder="Enter the name" icon="person" />
          <TestInput
            type="text"
            placeholder="Enter the email"
            icon="alternate_email"
          />
          <TestInput
            type="password"
            placeholder="Enter the Password"
            icon="lock"
          />
          <TestInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <Checkbox type="checkbox" text="I agree to the Terms & Conditions" />
          <Button>Submit Now</Button>
          <div class="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </From>
      </div>
    </>
  );
}
