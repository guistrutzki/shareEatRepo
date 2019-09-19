import React from 'react';
import PropTypes from 'prop-types';

import {
  SafeAreaView,
  BackButton,
  BackButtonIcon,
  HeaderMiddle,
  HeaderText,
  HeaderRight,
  SearchButton,
  LocationTextIcon,
  HeaderTitle,
  HeaderTitleWrapper,
} from './styles';

import SearchIcon from '../../assets/search.png';
import ArrowIcon from '../../assets/left-arrow.png';
import LocationIcon from '../../assets/marker-white.png';

const Header = props => {
  const {isHome, navRef, headerAddress, showMarkerIcon} = props;
  return (
    <SafeAreaView>
      {isHome && (
        <HeaderTitleWrapper>
          <HeaderTitle>Home</HeaderTitle>
        </HeaderTitleWrapper>
      )}

      {!isHome && (
        <>
          <BackButton onPress={() => navRef.goBack()}>
            <BackButtonIcon source={ArrowIcon} />
          </BackButton>
          <HeaderMiddle>
            {showMarkerIcon && <LocationTextIcon source={LocationIcon} />}
            <HeaderText numberOfLines={1}>
              {headerAddress || 'Carregando...'}
            </HeaderText>
          </HeaderMiddle>
          <HeaderRight>
            <SearchButton source={SearchIcon} />
          </HeaderRight>
        </>
      )}
    </SafeAreaView>
  );
};

Header.propTypes = {
  isHome: PropTypes.bool,
  navRef: PropTypes.objectOf,
  headerAddress: PropTypes.string,
  showMarkerIcon: PropTypes.bool,
};

Header.defaultProps = {
  isHome: false,
  navRef: null,
  headerAddress: '',
  showMarkerIcon: false,
};

export default Header;
