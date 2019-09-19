import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  addressMap: {
    width: '100%',
    height: 80,
  },
  shimmer: {
    backgroundColor: '#ebebeb',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export const SearchButtonArea = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const SearchButton = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f1f1f1;
`;

export const ImageWrapper = styled.View`
  position: relative;
  flex: 1;
  height: 200px;
`;

export const TaskImage = styled.Image`
  flex: 1;
`;

export const TaskIconButton = styled.View`
  bottom: -30px;
  right: 20px;
  position: absolute;
  padding: 10px;
  background-color: #fff;
  border-radius: 40px;
  z-index: 40;
`;

export const TaskIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const ContentWrapper = styled.View`
  width: 100%;
  background-color: #fff;
`;

export const TaskTitle = styled.Text`
  font-size: 18;
  font-weight: 500;
  margin-left: 5%;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #eead4f;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  margin-top: 10px;
  width: 90%;
  margin-left: 5%;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #c5c5c5;
  padding-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const ButtonTitle = styled.Text`
  font-size: 9px;
  color: #eead4f;
  font-weight: ${props => (props.isBold ? 500 : 300)};
`;

export const TaskText = styled.Text`
  width: 90%;
  margin-left: 5%;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #eead4f;
  font-size: 14px;
`;

export const YellowBar = styled.View`
  position: relative;
  width: 100%;
  height: 20px;
  background: #eead4f;
  justify-content: center;
`;

export const AddressText = styled.Text`
  font-size: 10px;
  color: #fff;
  text-align: right;
  margin-right: 15%;
`;

export const AddressIconArea = styled.View`
  position: absolute;
  right: 10px;
  top: -15px;
  /* padding: 5px; */
  background-color: #fff;
  border-radius: 15px;
`;

export const AddressIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const CommentsWrapper = styled.View`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  min-height: 50px;
`;

export const CommentsEmpty = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #eead4f;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  align-self: center;
  min-height: 100%;
`;

export const Header = styled.Text`
  width: 100%;
  background: red;
`;
