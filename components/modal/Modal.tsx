"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ModalUI } from "../ui";

type TModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

const Modal: FC<TModalProps> = ({ title, children, isOpen, onClose }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  const closed = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closed();
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, setVisible]);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const body = document.body;
    const modals = document.getElementById("modals");
    setModalRoot(modals);
    return () => {
      body.dataset.scrollLocked = "0";
      body.classList.remove("open");
    };
  }, []);

  return (
    isOpen &&
    ReactDOM.createPortal(
      <ModalUI title={title} onClose={closed} visible={isVisible}>
        {children}
      </ModalUI>,
      modalRoot!
    )
  );
};

export default Modal;
