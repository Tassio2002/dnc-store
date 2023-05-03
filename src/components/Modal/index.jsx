import React from 'react';
import PropTypes from 'prop-types';
import { Background, ModalContaine } from './styles';

export default function Modal({ props }) {
  return (
    <Background>
      <ModalContaine>{props}</ModalContaine>
    </Background>
  );
}

Modal.propTypes = {
  props: PropTypes.element.isRequired,
};
