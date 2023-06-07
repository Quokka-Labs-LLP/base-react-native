import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MyDarkTheme, MyLightTheme } from '~styles';

const initialState = {
  appTheme: MyLightTheme,
  isSkipped: <boolean>false,
}

const SettingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    ChangeTheme(state, action: PayloadAction<string>) {
      state.appTheme = action.payload == 'dark'
        ? MyDarkTheme : MyLightTheme;
    },
    OnSkip(state, action: PayloadAction<boolean>) {
      state.isSkipped = action.payload;
    }
  }
})

export const SettingsReduces = SettingsSlice.reducer;
export const { ChangeTheme, OnSkip } = SettingsSlice.actions;