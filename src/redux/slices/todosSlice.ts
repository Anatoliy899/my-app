import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

export interface CounterState {
  todos: ITodo[];
}

const initialState: CounterState = {
  todos: [
    {
      id: 2354567,
      title: 'Позвонить по делам',
      complete: false,
    },
    {
      id: 4564578,
      title: 'Покормить кошку',
      complete: false,
    },
    {
      id: 5667844,
      title: 'Внести изменения в код',
      complete: false,
    },
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: Number(Date.now()),
        title: action.payload,
        complete: false,
      });
    },

    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo(state, action: PayloadAction<number>) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (toggledTodo) {
        toggledTodo.complete = !toggledTodo.complete;
      }
    },

    // incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
