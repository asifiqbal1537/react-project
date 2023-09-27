import classes from "../style/From.module.css";
export default function From({ children, className, ...rest }) {
  return (
    <form className={`${className} ${classes.form}`} action="#">
      {children}
    </form>
  );
}
