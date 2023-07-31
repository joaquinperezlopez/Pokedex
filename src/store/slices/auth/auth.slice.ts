import { Credentials } from '@models/credentials.types';
import { createSlice } from '@reduxjs/toolkit';
import authApi from '@services/auth/auth.api';

export interface AuthState {
  isLogged: boolean;
  credentials?: Credentials;
}

const initialState: AuthState = {
  isLogged: false
};

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    }
  },
  extraReducers: builder => {
    // we need to listen the for login RTK query
    // and update the state accordingly
    builder.addMatcher(authApi.endpoints.login.matchPending, state => {
      state.isLogged = false;
    });
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.isLogged = true;
        state.credentials = action.payload;
      }
    );
  }
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
