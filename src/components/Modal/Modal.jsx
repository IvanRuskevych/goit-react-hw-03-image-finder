import { Component } from 'react';
import css from './Modal.module.css';

import { createPortal } from 'react-dom';

const modalRef = document.getElementById('modal');

export default class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDownEsc);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyDownEsc);
  };

  handleKeyDownEsc = e => {
    if (e.code === 'Escape') {
      return this.props.toggleModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      return this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <h2>MODAL</h2>
          <img src="" alt="!!!!!!!!!!!" />
        </div>
      </div>,
      modalRef
    );
  }
}
