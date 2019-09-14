import React from 'react';

import { CardWrapper, TaskTitle } from './styles';

const TaskCard = (props) => {
  const { item, handleClick } = props;
  return (
    <CardWrapper onPress={() => handleClick(item)}>
      <TaskTitle>
        {`Tarefa: ${item}`}
      </TaskTitle>
    </CardWrapper>
  );
};

export default TaskCard;
