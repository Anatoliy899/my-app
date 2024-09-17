import React from 'react';

import { ITodo } from '../types/data';
import { useAppDispatch } from '../redux/store';
import { removeTodo, toggleTodo } from '../redux/slices/todosSlice';

const TodoItem: React.FC<ITodo> = (props) => {
  const { id, title, complete } = props;
  const dispatch = useAppDispatch();

  const removeTodoHendler = (id: number) => {
    dispatch(removeTodo(id));
  };

  const toggleTodoHendler = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div style={{ margin: '8px 0px 0px 0px' }}>
      <input
        type="checkbox"
        checked={complete}
        onClick={() => toggleTodoHendler(id)}
      />
      <span style={{ margin: '0px 8px' }}>{title}</span>
      <button
        style={{
          border: 'none',
          padding: '0',
          background: 'none',
          color: 'red',
        }}
        onClick={() => removeTodoHendler(id)}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
