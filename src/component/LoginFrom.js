import classes from "../style/From.module.css";
export default function LoginFrom({ children, className, ...rest }) {
  return (
    <form class={`${className} ${classes.form}`} action="#">
      {children}
    </form>
  );
}
