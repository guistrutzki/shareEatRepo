import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  addressMap: {
    width: '100%',
    height: 80,
  },
});

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

export const TaskIconButton = styled.TouchableOpacity`
  bottom: -30px;
  right: 20px;
  position: absolute;
  padding: 10px;
  background-color: #fff;
  border-radius: 40px;
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
  color: #EEAD4f;
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
  color: #EEAD4f;
  font-weight: ${(props) => (props.isBold ? 500 : 300)};
`;

export const TaskText = styled.Text`
  width: 90%;
  margin-left: 5%;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #EEAD4f;
  font-size: 14px;
`;

export const YellowBar = styled.View`
  position: relative;
  width: 100%;
  height: 20px;
  background: #EEAD4f;
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

export const CommentsWrapper = styled.FlatList`
  background-color: #fff;
`;
