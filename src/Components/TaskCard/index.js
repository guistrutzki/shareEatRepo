import React from 'react';
import PropTypes from 'prop-types';

import {CardWrapper, TaskTitle} from './styles';

const TaskCard = props => {
  const {item, handleClick} = props;
  return (
    <CardWrapper onPress={() => handleClick(item)}>
      <TaskTitle>{`Tarefa: ${item}`}</TaskTitle>
    </CardWrapper>
  );
};

TaskCard.propTypes = {
  item: PropTypes.string,
  handleClick: PropTypes.func,
};

TaskCard.defaultProps = {
  item: '',
  handleClick: () => {},
};

export default TaskCard;
