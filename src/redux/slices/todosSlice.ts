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
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    decrement: (state) => {},
    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { setTodos, decrement, incrementByAmount } = todosSlice.actions;

export default todosSlice.reducer;
