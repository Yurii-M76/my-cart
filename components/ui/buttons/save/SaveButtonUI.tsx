import { CartIconUI } from "../../icons";
import classes from "./save-button.module.css";

const SaveButtonUI = ({ isDisabled }: { isDisabled: boolean }) => {
  return (
    <button type="button" className={classes.save} disabled={isDisabled}>
      <CartIconUI />
      Сохранить
    </button>
  );
};

export default SaveButtonUI;
