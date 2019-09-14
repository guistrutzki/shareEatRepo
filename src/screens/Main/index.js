import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import api from '../../services/api';
import {
  Container,
  ImageWrapper,
  TaskImage,
  TaskIcon,
  TaskIconButton,
  ContentWrapper,
  TaskTitle,
  ButtonsWrapper,
  Button,
  ButtonIcon,
  ButtonTitle,
  TaskText
} from './styles';

import servicesIcon from '../../assets/services.png';
import commentsIcon from '../../assets/comments.png';
import phoneIcon from '../../assets/phone.png';
import markerIcon from '../../assets/marker.png';
import starIcon from '../../assets/star.png';

const Main = props => {
  const {navigation} = props;
  const [data, setData] = useState(null);
  // Component
  const headerRight = <Text>lala</Text>;

  Main.navigationOptions = {
    title: navigation.getParam('title'),
    headerRight,
  };

  const task = navigation.getParam('task');

  const fetchTask = async id => {
    const response = await api.getTask(id);
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchTask(task);
  }, []);

  return (
    <Container>
      {!data && <ActivityIndicator size="large" color="#000" />}

      {data && (
        <>
          <ImageWrapper>
            <TaskImage source={{ uri: data.urlFoto }} resizeMode="cover" />
            <TaskIconButton>
              <TaskIcon source={{ uri: data.urlLogo }} />
            </TaskIconButton>
          </ImageWrapper>

          <TaskTitle>{ data.titulo.toUpperCase() }</TaskTitle>

          <ContentWrapper>
            <ButtonsWrapper>
              <Button onPress={() => alert('call')}>
                <ButtonIcon source={phoneIcon} />
                <ButtonTitle isBold>Ligar</ButtonTitle>
              </Button>
              <Button onPress={() => alert('services')}>
                <ButtonIcon source={servicesIcon} />
                <ButtonTitle>Serviços</ButtonTitle>
              </Button>
              <Button onPress={() => alert('marker')}>
                <ButtonIcon source={markerIcon} />
                <ButtonTitle>Endereço</ButtonTitle>
              </Button>
              <Button onPress={() => alert('comments')}>
                <ButtonIcon source={commentsIcon} />
                <ButtonTitle>Comentários</ButtonTitle>
              </Button>
              <Button onPress={() => alert('favorites')}>
                <ButtonIcon source={starIcon} />
                <ButtonTitle>Favoritos</ButtonTitle>
              </Button>
            </ButtonsWrapper>

            <TaskText>
              { data.texto }
            </TaskText>
          </ContentWrapper>
        </>
      )}
    </Container>
  );
};

export default Main;
