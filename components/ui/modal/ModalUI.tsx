import { FC, memo } from "react";
import { ModalOverlayUI } from "../modal-overlay";
import { ActionIconUI } from "../action-icon";
import { XIconUI } from "../icons";
import { TModalUI } from "@/types";
import classes from "./modal.module.css";

const ModalUI: FC<TModalUI> = memo(
  ({ title, size = "md", position = "center", visible, onClose, children }) => {
    const modalClassNames = [
      classes.modal,
      classes[size],
      size !== "fullScreen" ? classes[position] : classes.center,
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
              <div className="rotation">
                <XIconUI />
              </div>
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
