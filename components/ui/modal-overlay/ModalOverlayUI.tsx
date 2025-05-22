import classes from "./modal-overlay.module.css";

const ModalOverlayUI = ({
  onClick,
  visible,
}: {
  onClick: () => void;
  visible: boolean;
}) => {
  const classNames = [classes.overlay, visible ? classes.visible : null]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames} onClick={onClick} />;
};

export default ModalOverlayUI;
