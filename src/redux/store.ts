import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './slices/todosSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    todosSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
