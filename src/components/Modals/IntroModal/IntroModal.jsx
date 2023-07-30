import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function IntroModal({ openModal, closeModal, children, style }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal} className={style}>
      {children}
    </dialog>
  );
}

IntroModal.propTypes = {
  openModal: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.array,
  style: PropTypes.string,
};

export default IntroModal;
