import { useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./CreationPopUp.css";

const ModalPopUp = ({ isOpen = true, onClose, children, title, message, classNames = {}, styles = {}, closeOnOverlayClick = true, closeOnEsc = true, showCloseButton = true, portalSelector = "body", ariaLabel = "Dialog" }) => {
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose && onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  const overlayClass = `modal-overlay ${classNames.overlay || ""}`.trim();
  const modalClass = `modal ${classNames.modal || ""}`.trim();
  const headerClass = `modal-header ${classNames.header || ""}`.trim();
  const contentClass = `modal-content ${classNames.content || ""}`.trim();
  const footerClass = `modal-footer ${classNames.footer || ""}`.trim();
  const closeClass = `modal-close ${classNames.closeButton || ""}`.trim();

  const modal = (
    <div className={overlayClass} style={styles.overlay} onClick={() => closeOnOverlayClick && onClose && onClose()}>
      <div className={modalClass} style={styles.modal} role="dialog" aria-modal="true" aria-label={ariaLabel} onClick={(e) => e.stopPropagation()}>
        {showCloseButton && (
          <button className={closeClass} style={styles.closeButton} onClick={onClose} aria-label="Close dialog">
            <span className="modal-close-icon">×</span>
          </button>
        )}

        {title && (
          <div className={headerClass} style={styles.header}>
            <h3>{title}</h3>
          </div>
        )}

        <div className={contentClass} style={styles.content}>
          {children ? children : message ? <p>{message}</p> : null}
        </div>

        <div className={footerClass} style={styles.footer} />
      </div>
    </div>
  );

  if (typeof document !== "undefined") {
    const root = document.querySelector(portalSelector) || document.body;
    return ReactDOM.createPortal(modal, root);
  }

  return modal;
};

ModalPopUp.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.node,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  classNames: PropTypes.object,
  styles: PropTypes.object,
  closeOnOverlayClick: PropTypes.bool,
  closeOnEsc: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  portalSelector: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default ModalPopUp;
