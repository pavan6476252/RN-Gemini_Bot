import {configureStore} from '@reduxjs/toolkit';
import themeSlice from './slice/theme.slice';
import authSlice from './slice/auth.slice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
