import React from 'react';
import TodoItem from './TodoItem';

import { ITodo } from '../types/data';

interface ITodoListProps {
  item: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
const TodoList: React.FC<ITodoListProps> = (props) => {
  const { removeTodo, item, toggleTodo } = props;
  return (
    <div>
      {item.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
