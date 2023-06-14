import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MyDarkTheme, MyLightTheme } from '~styles';

const initialState = {
  appTheme: MyLightTheme,
}

const SettingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    ChangeTheme(state, action: PayloadAction<string>) {
      state.appTheme = action.payload == 'dark'
        ? MyDarkTheme : MyLightTheme;
    },
  }
})

export const SettingsReduces = SettingsSlice.reducer;
export const { ChangeTheme } = SettingsSlice.actions;