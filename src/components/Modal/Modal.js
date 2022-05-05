import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children }) {
  const history = useHistory();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        history.goBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [history]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      history.goBack();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.content}>{children}</div>
    </div>,
    modalRoot
  );
}
