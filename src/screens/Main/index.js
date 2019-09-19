import React, {useEffect, useState, useRef} from 'react';
import {Linking, Alert} from 'react-native';
import MapView from 'react-native-maps';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import PropTypes from 'prop-types';

import api from '../../services/api';
import Commentary from '../../Components/Commentary';
import Header from '../../Components/Header';

import {
  Container,
  ActivityIndicator,
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
  CommentsEmpty,
} from './styles';

import servicesIcon from '../../assets/services.png';
import commentsIcon from '../../assets/comments.png';
import phoneIcon from '../../assets/phone.png';
import markerIcon from '../../assets/marker.png';
import starIcon from '../../assets/star.png';

const Main = props => {
  const {navigation} = props;
  const scrollView = useRef(null);
  const commentsRef = useRef(null);
  const [data, setData] = useState(null);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [containerHeight, setContainerHeight] = useState(null);
  const [location, setLocation] = useState({
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034,
  });

  const task = navigation.getParam('task');

  const fetchTask = async id => {
    const response = await api.getTask(id);
    setData(response.data);
    setLocation({
      ...location,
      latitude: response.data.latitude,
      longitude: response.data.longitude,
    });
  };

  useEffect(() => {
    fetchTask(task);
  }, []);

  const handleCallToNumber = () => {
    Linking.openURL(`tel:${data.telefone}`);
  };

  const handleShowLocation = () => {
    Alert.alert('Endereço', data.endereco, [{text: 'Ok'}], {cancelable: false});
  };

  const handleScrollToComments = () => {
    let elementPosition = null;
    commentsRef.current.measure((fx, fy, width, height, px, py) => {
      elementPosition = py;
    });
    scrollView.current.scrollTo({
      x: 0,
      y: containerHeight - elementPosition,
      animated: true,
    });
  };

  const handleNavToServices = () => {
    navigation.navigate('Services');
  };

  return (
    <>
      <Header
        navRef={navigation}
        headerAddress={
          !data ? 'Carregando...' : `${data.cidade} - ${data.endereco}`
        }
        showMarkerIcon={data === true}
      />
      <Container
        ref={scrollView}
        onContentSizeChange={(width, height) => {
          setContainerHeight(height);
        }}>
        {!data && <ActivityIndicator size="large" color="#000" />}

        {data && (
          <>
            <ShimmerPlaceHolder
              style={styles.shimmer}
              autoRun
              visible={isImgLoaded}
              width={1000}
              height={200}
              colorShimmer={['#ebebeb', '#c5c5c5', '#ebebeb']}
            />
            <ImageWrapper>
              <TaskImage
                source={{uri: data.urlFoto}}
                resizeMode="cover"
                onLoad={() => {
                  setIsImgLoaded(true);
                }}
              />
              <TaskIconButton>
                <TaskIcon source={{uri: data.urlLogo}} />
              </TaskIconButton>
            </ImageWrapper>

            <TaskTitle>{data.titulo.toUpperCase()}</TaskTitle>

            <ContentWrapper>
              <ButtonsWrapper>
                <Button onPress={() => handleCallToNumber()}>
                  <ButtonIcon source={phoneIcon} />
                  <ButtonTitle isBold>Ligar</ButtonTitle>
                </Button>
                <Button onPress={() => handleNavToServices()}>
                  <ButtonIcon source={servicesIcon} />
                  <ButtonTitle>Serviços</ButtonTitle>
                </Button>
                <Button onPress={() => handleShowLocation()}>
                  <ButtonIcon source={markerIcon} />
                  <ButtonTitle>Endereço</ButtonTitle>
                </Button>
                <Button onPress={() => handleScrollToComments()}>
                  <ButtonIcon source={commentsIcon} />
                  <ButtonTitle>Comentários</ButtonTitle>
                </Button>
                <Button onPress={() => {}}>
                  <ButtonIcon source={starIcon} />
                  <ButtonTitle>Favoritos</ButtonTitle>
                </Button>
              </ButtonsWrapper>

              <TaskText>{data.texto}</TaskText>
            </ContentWrapper>

            {location.latitude && (
              <>
                <MapView style={styles.addressMap} region={location}>
                  <MapView.Marker coordinate={location} />
                </MapView>

                <YellowBar>
                  <AddressText>{data.endereco}</AddressText>
                  <AddressIconArea>
                    <AddressIcon source={markerIcon} />
                  </AddressIconArea>
                </YellowBar>

                <CommentsWrapper ref={commentsRef}>
                  {data.comentarios.length === 0 && (
                    <CommentsEmpty>Ainda não há comentários</CommentsEmpty>
                  )}
                  {data.comentarios.length > 0 &&
                    data.comentarios.map(comment => (
                      <Commentary data={comment} key={comment.titulo} />
                    ))}
                </CommentsWrapper>
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }),
};

Main.defaultProps = {
  navigation: null,
};

export default Main;
