import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from './auth/authSlice'
import { SettingsReduces } from './settings/SettingsSlice';
import { userReducer } from './user/userSlice'

export const RootReducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  settings: SettingsReduces,
})
