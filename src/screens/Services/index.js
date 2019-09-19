import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../Components/Header';
import {Container, Title} from './styles';

const Services = props => {
  const {navigation} = props;
  return (
    <>
      <Header title="Serviços" isDefault navRef={navigation} />
      <Container>
        <Title>Serviços</Title>
      </Container>
    </>
  );
};

Services.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

Services.defaultProps = {
  navigation: null,
};

export default Services;
