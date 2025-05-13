import { FC, memo, ReactNode } from "react";
import { ModalOverlayUI } from "../modal-overlay";
import classes from "./modal.module.css";

type TModalUI = {
  title: string;
  onClose: () => void;
  children?: ReactNode;
};

const ModalUI: FC<TModalUI> = memo(({ title, children, onClose }) => {
  return (
    <>
      <div className={classes.modal}>
        <div className={classes.head}>
          <h3>{title}</h3>
          <div onClick={onClose}>close</div>
        </div>
        {children}
      </div>
      <ModalOverlayUI onClick={onClose} />
    </>
  );
});

ModalUI.displayName = "ModalUI";
export default ModalUI;
