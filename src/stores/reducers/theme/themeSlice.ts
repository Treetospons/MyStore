import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type TAppTheme = {
  appTheme: 'Dark' | 'Light';
};

const initialState: TAppTheme = {
  appTheme: 'Dark',
};

const themeSlice = createSlice({
  name: 'appTheme',
  initialState,
  reducers: {
    setAppTheme: (state, action: PayloadAction<TAppTheme>) => {
      state.appTheme = action.payload.appTheme;
    },
  },
});

export const {setAppTheme} = themeSlice.actions;

export default themeSlice.reducer;
