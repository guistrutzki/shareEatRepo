import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const TasksWrapper = styled.View`
  width: 90%;
  margin-left: 5%;
  height: 80%;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26;
  margin-top: 30px;
  margin-left: 5%;
  color: #fff;
  font-weight: 500;
`;

export const FlatList = styled.FlatList`
  flex: 1;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
`;
