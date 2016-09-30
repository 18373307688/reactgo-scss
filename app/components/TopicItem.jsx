import React, { PropTypes } from 'react';

const TopicItem = ({ text, id, incrementCount, decrementCount, destroyTopic }) => {
  const onIncrement = () => {
    incrementCount(id);
  };
  const onDecrement = () => {
    decrementCount(id);
  };
  const onDestroy = () => {
    destroyTopic(id);
  };

  return (
    <li className='topic-item' key={id}>
      <span className='topic'>{text}</span>
      <button
        className='button increment'
        onClick={onIncrement}>+</button>
      <button
        className='button decrement'
        onClick={onDecrement}>-</button>
      <button
        className='button destroy'
        onClick={onDestroy}>{String.fromCharCode(215)}</button>
    </li>
  );
};

TopicItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  destroyTopic: PropTypes.func.isRequired
};

export default TopicItem;
