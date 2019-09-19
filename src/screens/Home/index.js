import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import api from '../../services/api';
import Header from '../../Components/Header';
import {
  styles,
  TasksWrapper,
  Title,
  FlatList,
  ActivityIndicator,
} from './styles';
import TaskCard from '../../Components/TaskCard';

const Home = props => {
  const {navigation} = props;
  const [tasks, setTasks] = useState();

  const fetchTasks = async () => {
    const response = await api.getAllTasks();
    setTasks(response.data.lista);
  };

  const handleTaskClick = task => {
    navigation.navigate('Main', {task, title: 'Localização...'});
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header isHome />
      <LinearGradient colors={['#EEAD4f', '#EEAD88']} style={styles.container}>
        <Title>Tarefas</Title>
        <TasksWrapper>
          {!tasks && <ActivityIndicator size="large" color="#fff" />}

          <FlatList
            data={tasks}
            keyExtractor={item => `key-${item}`}
            renderItem={({item}) => (
              <TaskCard item={item} handleClick={handleTaskClick} />
            )}
          />
        </TasksWrapper>
      </LinearGradient>
    </>
  );
};

Home.propTypes = {
  navigation: PropTypes.objectOf,
};

Home.defaultProps = {
  navigation: null,
};

export default Home;
