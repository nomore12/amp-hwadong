import { configureStore } from '@reduxjs/toolkit';
import { subjectReducer, cursorReducer, overlayReducer } from './Slice';

export const store = configureStore({
  reducer: {
    subject: subjectReducer,
    cursor: cursorReducer,
    overlay: overlayReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
