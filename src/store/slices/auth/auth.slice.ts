import { Credentials } from '@models/auth/credentials.types';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import authApi from '@services/auth/auth.api';
import { RootState } from '@store/index';

export interface AuthState {
  isLogged: boolean;
  credentials?: Credentials;
}

const initialState: AuthState = {
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    // we need to listen the for login RTK query
    // and update the state accordingly

    builder.addMatcher(
      isAnyOf(
        authApi.endpoints.login.matchPending,
        authApi.endpoints.login.matchRejected
      ),
      state => {
        state.isLogged = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        console.log('action.payload', action.payload);
        state.isLogged = true;
        state.credentials = action.payload;
      }
    );
  },
});

// selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLogged;

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
