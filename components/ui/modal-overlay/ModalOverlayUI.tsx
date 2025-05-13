import classes from "./modal-overlay.module.css";

const ModalOverlayUI = ({ onClick }: { onClick: () => void }) => (
  <div className={classes.overlay} onClick={onClick} />
);

export default ModalOverlayUI;
