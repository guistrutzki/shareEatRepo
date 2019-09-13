import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const TasksWrapper = styled.View`
  width: 80%;
  margin-left: 10%;
  height: 80%;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26;
  margin-top: 30px;
  margin-left: 5%;
  color: #000;
  font-weight: 500,
`;
