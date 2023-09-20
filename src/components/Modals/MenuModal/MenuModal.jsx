import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Styles/menuModalPrologue.css";
import "./Styles/menuModalLevelOneReal.css";
import "./Styles/menuModalLevelOneVirtual.css";
import "./Styles/menuModalLevelOneLoophole.css";

function MenuModal({ title, openMenu, closeMenu, children, style }) {
  const ref = useRef();

  useEffect(() => {
    if (openMenu) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openMenu]);

  return (
    <dialog
      ref={ref}
      onCancel={closeMenu}
      className={`menuModal-container--${style}`}
    >
      <h2 className={`menuModal-title--${style}`}>{title}</h2>
      <nav className={`menuModal-nav--${style}`}>{children}</nav>
      <button onClick={closeMenu} className={`menuModal-closeBtn--${style}`}>
        Close (esc)
      </button>
    </dialog>
  );
}

MenuModal.propTypes = {
  title: PropTypes.string,
  openMenu: PropTypes.bool,
  closeMenu: PropTypes.func,
  children: PropTypes.array,
  style: PropTypes.string,
};

export default MenuModal;
