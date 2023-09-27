import classes from "../style/TextInput.module.css";
export default function TestInput({ icon, ...rest }) {
  return (
    <div class={classes.textInput}>
      <input {...rest} />
      <span class="material-icons-outlined"> {icon} </span>
    </div>
  );
}
