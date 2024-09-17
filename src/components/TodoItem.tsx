import React from 'react';

import { ITodo } from '../types/data';

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;
  return (
    <div style={{ margin: '8px 0px 0px 0px' }}>
      <input
        type="checkbox"
        checked={complete}
        onClick={() => toggleTodo(id)}
      />
      <span style={{ margin: '0px 8px' }}>{title}</span>
      <button
        style={{
          border: 'none',
          padding: '0',
          background: 'none',
          color: 'red',
        }}
        onClick={() => removeTodo(id)}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
