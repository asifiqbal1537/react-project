import Checkbox from "../component/Checkbox";
import classes from "../style/Answer.module.css";
export default function Answer() {
  return (
    <div className={classes.answers}>
      <Checkbox
        type="checkbox"
        className={classes.answer}
        text="answer the quiestion "
      />
    </div>
  );
}
