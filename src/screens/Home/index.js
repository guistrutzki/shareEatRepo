import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  ActivityIndicator,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import api from '../../services/api';
import { styles, TasksWrapper, Title, FlatList } from './styles';
import TaskCard from '../../Components/TaskCard';

const Home = () => {
  const [tasks, setTasks] = useState();

  const fetchTasks = async () => {
    const response = await api.getAllTasks();
    setTasks(response.data.lista);
  };

  const handleTaskClick = (task) => {
    alert(task);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#f1f1f1', '#c1c1c1']} style={styles.container}>
        <Title>Tarefas</Title>
        <TasksWrapper>
          {!tasks && <ActivityIndicator size="large" color="#000" />}

          <FlatList
            data={tasks}
            keyExtractor={(item) => `key-${item}`}
            renderItem={({ item }) => <TaskCard item={item} handleClick={handleTaskClick} />}
          />
        </TasksWrapper>
      </LinearGradient>
    </>
  );
};

export default Home;
