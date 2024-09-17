import React from 'react';
import { useSelector } from 'react-redux';

import { ITodo } from '../types/data';
import TodoList from './TodoList';
import ButtonFormTodo from './UI/Buttons/ButtonFormTodo';
import { setTodos } from '../redux/slices/todosSlice';
import { RootState, useAppDispatch } from '../redux/store';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState('');
  const { todos } = useSelector((state: RootState) => state.todosSlice);

  const hendleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  const hendleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (value) {
      dispatch(
        setTodos([
          ...todos,
          {
            id: Date.now(),
            title: value,
            complete: false,
          },
        ])
      );
      setValue('');
    }
  };

  const removeTodo = (id: number) =>
    dispatch(setTodos(todos.filter((todo) => todo.id !== id)));

  const toggleTodo = (id: number) => {
    dispatch(
      setTodos(
        todos.map((todo) => {
          if (todo.id !== id) return todo;

          return { ...todo, complete: !todo.complete };
        })
      )
    );
  };

  React.useEffect(() => {
    // inputRef.current && inputRef.current.focus();
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={hendleChange}
          ref={inputRef}
          onKeyDown={hendleKeyDown}
        />

        <div
          style={{ display: 'inline-block', marginLeft: '10px' }}
          onClick={() => addTodo()}
        >
          <ButtonFormTodo text={'Add'} />
        </div>
      </div>
      <TodoList item={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};
