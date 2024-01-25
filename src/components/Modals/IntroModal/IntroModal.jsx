import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function IntroModal({ openIntro, closeIntro, children, style }) {
  const ref = useRef();

  useEffect(() => {
    if (openIntro) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openIntro]);

  return (
    <dialog ref={ref} onClose={closeIntro} className={style}>
      {children}
    </dialog>
  );
}

IntroModal.propTypes = {
  openIntro: PropTypes.bool,
  closeIntro: PropTypes.func,
  children: PropTypes.array,
  style: PropTypes.string,
};

export default IntroModal;
