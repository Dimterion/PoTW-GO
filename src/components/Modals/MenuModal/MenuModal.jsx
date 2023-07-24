import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./menuModal.css";

function MenuModal({ title, openMenu, closeMenu, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openMenu) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openMenu]);

  return (
    <dialog ref={ref} onCancel={closeMenu} className="menuModal-container">
      <nav>
        <h3>{title}</h3>
        {children}
        <button onClick={closeMenu} className="menuModal-closeBtn">
          Close
        </button>
      </nav>
    </dialog>
  );
}

MenuModal.propTypes = {
  title: PropTypes.string,
  openMenu: PropTypes.bool,
  closeMenu: PropTypes.func,
  children: PropTypes.array,
};

export default MenuModal;
