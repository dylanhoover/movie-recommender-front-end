"use client";
import { ReactNode, useEffect, useRef } from "react";
import StyledButton from "./StyledButton";
import styles from "./components.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog ref={dialogRef} className={styles.modal} id="modal">
      <div className={styles.overlay} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          id="modal-content"
        >
          <div className={styles.closeButton}>
            <StyledButton variant="secondary" onClick={onClose}>
              ✕
            </StyledButton>
          </div>
          {children}
        </div>
      </div>
    </dialog>
  );
}
