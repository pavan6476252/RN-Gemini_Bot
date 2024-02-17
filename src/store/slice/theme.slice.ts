import {createSlice} from '@reduxjs/toolkit';
import {Theme, darkTheme, lightTheme} from '../../utils/themes';
import {RootState} from '../store';

interface ThemeState {
  currentTheme: Theme;
}

const initialState: ThemeState = {
  currentTheme: lightTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    loadInitialTheme: state => {
      state.currentTheme = lightTheme;
    },
    toggleTheme: state => {
      if (state.currentTheme.type == 'light') {
        state.currentTheme = darkTheme;
      } else {
        state.currentTheme = lightTheme;
      }
    },
  },
});

export const {loadInitialTheme, toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;


export const selectTheme = (state: RootState) => state.theme.currentTheme;
