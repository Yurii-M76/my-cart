import { FC, memo, ReactNode } from "react";
import { ModalOverlayUI } from "../modal-overlay";
import { ActionIconUI } from "../action-icon";
import { XIconUI } from "../icons";
import classes from "./modal.module.css";

type TModalUI = {
  title: string;
  size?: "sm" | "md" | "lg" | "fullScreen";
  visible: boolean;
  onClose: () => void;
  children?: ReactNode;
};

const ModalUI: FC<TModalUI> = memo(
  ({ title, children, onClose, size = "md", visible }) => {
    const modalClassNames = [
      classes.modal,
      classes[size],
      visible ? classes.visible : null,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <>
        <div className={modalClassNames}>
          <div className={classes.head}>
            <h3>{title}</h3>
            <ActionIconUI
              size="md"
              onClick={onClose}
              variant="box-br-12"
              style={{ padding: 0, width: "24px", height: "24px" }}
            >
              <XIconUI />
            </ActionIconUI>
          </div>
          <div className={classes.content}>{children}</div>
        </div>

        <ModalOverlayUI onClick={onClose} visible={visible} />
      </>
    );
  }
);

ModalUI.displayName = "ModalUI";
export default ModalUI;
