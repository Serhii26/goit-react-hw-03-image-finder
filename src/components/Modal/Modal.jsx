import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, Container } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlKeyDown);
  }
  handlKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  handlOverlay = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.handlOverlay}>
        <Container>
          <img src={this.props.img} alt="" />
        </Container>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
