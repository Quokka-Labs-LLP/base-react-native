import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  loggedIn: false,
  loading: false,
  error: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteUserData: () => initialState
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(GetProfileData.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(GetProfileData.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.userData = { ...state.userData, ...action.payload };
    //   })
    //   .addCase(GetProfileData.rejected, (state, action) => {
    //     state.loading = false;
    //     handleError(action.payload);
    //   })
  }
})

export const { deleteUserData } = userSlice.actions
export const userReducer = userSlice.reducer;
