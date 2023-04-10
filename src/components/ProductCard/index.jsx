import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, Card, Image, Description, Button } from './styles';

export default function ProductCard({ image, description }) {
  return (
    <CardContainer>
      <Card>
        <Image src={image} alt={description} />
        <Description>{description}</Description>
        <Button>Ver mais</Button>
      </Card>
    </CardContainer>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
