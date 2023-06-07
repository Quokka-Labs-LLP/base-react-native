import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  accessToken: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState
  },
})


export const { logout } = authSlice.actions
export const authReducer = authSlice.reducer;