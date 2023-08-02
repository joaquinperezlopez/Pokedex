import { Credentials } from '@models/auth/credentials.types';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import authApi from '@services/auth/auth.api';
import { RootState } from '@store/index';
import {
  cleanCredentialsThunk,
  loadCredentialsThunk,
} from '@thunks/auth/auth.thunks';

export enum AuthStatus {
  CHECKING = 'CHECKING',
  LOGGED_IN = 'LOGGED_IN',
  LOGGED_OUT = 'LOGGED_OUT',
}

export interface AuthState {
  authStatus: AuthStatus;
  credentials?: Credentials;
}

const initialState: AuthState = {
  authStatus: AuthStatus.CHECKING,
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
    // loadCredentialsThunk listeners
    builder.addCase(loadCredentialsThunk.pending, state => {
      state.authStatus = AuthStatus.CHECKING;
    });
    builder.addCase(loadCredentialsThunk.fulfilled, (state, action) => {
      state.authStatus = AuthStatus.LOGGED_IN;
      state.credentials = action.payload.loadedCredentials;
    });
    builder.addCase(loadCredentialsThunk.rejected, state => {
      state.authStatus = AuthStatus.LOGGED_OUT;
      state.credentials = undefined;
    });

    builder.addCase(cleanCredentialsThunk.pending, state => {
      state.authStatus = AuthStatus.CHECKING;
    });
    builder.addCase(cleanCredentialsThunk.fulfilled, state => {
      state.authStatus = AuthStatus.LOGGED_OUT;
      state.credentials = undefined;
    });
    builder.addCase(cleanCredentialsThunk.rejected, state => {
      state.authStatus = AuthStatus.LOGGED_OUT;
      state.credentials = undefined;
    });

    builder.addMatcher(
      isAnyOf(
        authApi.endpoints.login.matchPending,
        authApi.endpoints.login.matchRejected
      ),
      state => {
        state.authStatus = AuthStatus.LOGGED_OUT;
        state.credentials = undefined;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.authStatus = AuthStatus.LOGGED_IN;
        state.credentials = action.payload;
      }
    );
  },
});

// selectors
export const selectAuthStatus = (state: RootState) => state.auth.authStatus;

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
