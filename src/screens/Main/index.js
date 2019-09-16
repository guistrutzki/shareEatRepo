import React, { useEffect, useState } from 'react';
import { Text, ActivityIndicator, Linking, Alert } from 'react-native';
import MapView from 'react-native-maps';

import api from '../../services/api';
import Commentary from '../../Components/Commentary';
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
  TaskText,
  styles,
  YellowBar,
  AddressText,
  AddressIconArea,
  AddressIcon,
  CommentsWrapper,
} from './styles';

import servicesIcon from '../../assets/services.png';
import commentsIcon from '../../assets/comments.png';
import phoneIcon from '../../assets/phone.png';
import markerIcon from '../../assets/marker.png';
import starIcon from '../../assets/star.png';

const Main = (props) => {
  const { navigation } = props;
  const [data, setData] = useState(null);
  const [location, setLocation] = useState({
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034,
  });
  // Component
  const headerRight = <Text>lala</Text>;

  Main.navigationOptions = {
    title: navigation.getParam('title'),
    headerRight,
  };

  const task = navigation.getParam('task');

  const fetchTask = async (id) => {
    const response = await api.getTask(id);
    setData(response.data);
    setLocation(
      {
        ...location,
        latitude: response.data.latitude,
        longitude: response.data.longitude,
      },
    );
  };

  useEffect(() => {
    fetchTask(task);
  }, []);

  const handleCallToNumber = () => {
    Linking.openURL(`tel:${data.telefone}`);
  };

  const handleShowLocation = () => {
    Alert.alert(
      'Endereço',
      data.endereco,
      [{ text: 'Ok' }],
      { cancelable: false },
    );
  };

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
              <Button onPress={() => handleCallToNumber()}>
                <ButtonIcon source={phoneIcon} />
                <ButtonTitle isBold>Ligar</ButtonTitle>
              </Button>
              <Button onPress={() => alert('services')}>
                <ButtonIcon source={servicesIcon} />
                <ButtonTitle>Serviços</ButtonTitle>
              </Button>
              <Button onPress={() => handleShowLocation()}>
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

          { location.latitude && (
            <>
              <MapView
                style={styles.addressMap}
                region={location}
              >
                <MapView.Marker
                  coordinate={location}
                />
              </MapView>

              <YellowBar>
                <AddressText>{ data.endereco }</AddressText>
                <AddressIconArea>
                  <AddressIcon source={markerIcon} />
                </AddressIconArea>
              </YellowBar>

              {
                data.comentarios.length > 0
                && data.comentarios.map((comment) => <Commentary data={comment} />)}
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Main;
