import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Background, ModalContainer } from './styles';

export default function Modal({ props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      {isOpen && (
        <Background>
          <ModalContainer>{props}</ModalContainer>
        </Background>
      )}
    </Container>
  );
}

Modal.propTypes = {
  props: PropTypes.element.isRequired,
};
