import { Credentials } from '@models/auth/credentials.types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Keychain, { setGenericPassword } from 'react-native-keychain';

export const saveCredentialsThunk = createAsyncThunk(
  'auth/saveCredentials',
  async (
    payload: {
      credentials: Credentials;
      email: string;
    },
    thunkAPI
  ) => {
    try {
      await setGenericPassword(
        payload.email,
        JSON.stringify(payload.credentials),
        {
          authenticationType:
            Keychain.AUTHENTICATION_TYPE.DEVICE_PASSCODE_OR_BIOMETRICS,
        }
      );
      return payload.credentials;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loadCredentialsThunk = createAsyncThunk(
  'auth/loadCredentials',
  async (_, thunkAPI) => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        const { username: email, password: loadedCredentials } = credentials;
        return { email, loadedCredentials: JSON.parse(loadedCredentials) };
      }
      return thunkAPI.rejectWithValue(null);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const cleanCredentialsThunk = createAsyncThunk(
  'auth/cleanCredentials',
  async (_, thunkAPI) => {
    try {
      await Keychain.resetGenericPassword();
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
