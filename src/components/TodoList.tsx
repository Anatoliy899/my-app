import React from 'react';
import TodoItem from './TodoItem';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const TodoList: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todosSlice);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
