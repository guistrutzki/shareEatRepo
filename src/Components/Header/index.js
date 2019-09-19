import React from 'react';
import Platform from 'react-native';
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
  const {
    isHome,
    navRef,
    headerAddress,
    showMarkerIcon,
    title,
    isDefault,
  } = props;
  return (
    <SafeAreaView>
      {isHome && (
        <HeaderTitleWrapper>
          <HeaderTitle>Home</HeaderTitle>
        </HeaderTitleWrapper>
      )}

      {isDefault && (
        <>
          <BackButton platform={Platform.OS} onPress={() => navRef.goBack()}>
            <BackButtonIcon source={ArrowIcon} />
          </BackButton>
          <HeaderTitleWrapper>
            <HeaderTitle>{title}</HeaderTitle>
          </HeaderTitleWrapper>
        </>
      )}

      {!isHome && !isDefault && (
        <>
          <BackButton platform={Platform.OS} onPress={() => navRef.goBack()}>
            <BackButtonIcon source={ArrowIcon} />
          </BackButton>
          <HeaderMiddle>
            {showMarkerIcon && <LocationTextIcon source={LocationIcon} />}
            <HeaderText numberOfLines={1}>
              {headerAddress || 'Carregando...'}
            </HeaderText>
          </HeaderMiddle>
          <HeaderRight platform={Platform.OS}>
            <SearchButton source={SearchIcon} />
          </HeaderRight>
        </>
      )}
    </SafeAreaView>
  );
};

Header.propTypes = {
  isHome: PropTypes.bool,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
  navRef: PropTypes.shape({
    goBack: PropTypes.func,
  }),
  headerAddress: PropTypes.string,
  showMarkerIcon: PropTypes.bool,
  title: PropTypes.string,
  isDefault: PropTypes.bool,
};

Header.defaultProps = {
  isHome: false,
  navRef: null,
  navigation: null,
  headerAddress: '',
  showMarkerIcon: null,
  title: '',
  isDefault: null,
};

export default Header;
