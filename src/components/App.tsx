import React from 'react';
import { useSelector } from 'react-redux';

import { ITodo } from '../types/data';
import TodoList from './TodoList';
import ButtonFormTodo from './UI/Buttons/ButtonFormTodo';
import { addTodo } from '../redux/slices/todosSlice';
import { RootState, useAppDispatch } from '../redux/store';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState('');
  const { todos } = useSelector((state: RootState) => state.todosSlice);

  const hendleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  const hendleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodoHendler();
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  const addTodoHendler = () => {
    if (value) {
      dispatch(addTodo(value));
      setValue('');
    }
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
          onClick={() => addTodoHendler()}
        >
          <ButtonFormTodo text={'Add'} />
        </div>
      </div>
      <TodoList />
    </div>
  );
};
