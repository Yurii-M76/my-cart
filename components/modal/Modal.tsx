"use client";
import { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ModalUI } from "../ui";
import { TModal } from "@/types";

const Modal: FC<TModal> = ({
  title,
  children,
  isOpen,
  size,
  position,
  onClose,
}) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  const visibilityToggle = (isVisibi: boolean) => {
    const visibility = setTimeout(() => {
      setVisible(isVisibi);
      clearTimeout(visibility);
    }, 1);
  };

  const closeHandler = () => {
    const close = setTimeout(() => {
      clearTimeout(close);
      return onClose();
    }, 300);
  };

  const closed = () => {
    visibilityToggle(false);
    closeHandler();
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
    visibilityToggle(isOpen ? true : false);
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
      <ModalUI
        title={title}
        position={position}
        size={size}
        visible={isVisible}
        onClose={closed}
      >
        {children}
      </ModalUI>,
      modalRoot!
    )
  );
};

export default Modal;
