import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  height: 10%;
  width: 100%;
  background-color: #ab711b;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: ${props => (props.platform === 'android' ? '33%' : '25%')};
  left: 15px;
  z-index: 50;
`;

export const BackButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const HeaderMiddle = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  font-size: 12;
  color: #fff;
  font-family: Arial;
  max-width: 60%;
`;

export const HeaderRight = styled.TouchableOpacity`
  position: absolute;
  bottom: ${props => (props.platform === 'android' ? '33%' : '25%')};
  right: 10px;
`;

export const SearchButton = styled.Image`
  width: 20px;
  height: 20px;
`;

export const LocationTextIcon = styled.Image`
  margin-right: 5px;
  width: 15px;
  height: 15px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: Arial;
  text-align: center;
  font-weight: 500;
`;

export const HeaderTitleWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
