import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from '../store';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
export interface SerializableUser {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;

  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}

interface AuthState {
  user: SerializableUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<SerializableUser>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    logout: state => {
      state.user = null;
    },
    signInWithGoogle: state => {
      state.loading = true;
      state.error = null;
    },
    signInWithGoogleSuccess: (
      state,
      action: PayloadAction<SerializableUser>,
    ) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInWithGoogleFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  login,
  logout,
  signInWithGoogle,
  signInWithGoogleSuccess,
  signInWithGoogleFailure,
} = authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state: RootState) => state.auth.user;

export const selectLoading = (state: RootState) => state.auth.loading;

export const selectError = (state: RootState) => state.auth.error;

// Thunk action for asynchronous Google sign-in
export const signOutAsync = () => async (dispatch: AppDispatch) => {
  await auth().signOut();
  await GoogleSignin.signOut();
  dispatch(logout());
};

export const signInWithGoogleAsync = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(signInWithGoogle());

    await GoogleSignin.configure({
      webClientId:
        '374164567677-1a0ikbvgblgumdcrltodgrtb0k7j6su0.apps.googleusercontent.com',
      offlineAccess: true,
    });

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const credential = await auth().signInWithCredential(googleCredential);

    const serializedUser: SerializableUser = {
      displayName: credential.user.displayName,
      email: credential.user.email,
      emailVerified: credential.user.emailVerified,
      isAnonymous: credential.user.isAnonymous,

      phoneNumber: credential.user.phoneNumber,
      photoURL: credential.user.photoURL,
      providerId: credential.user.providerId,
      uid: credential.user.uid,
    };

    dispatch(signInWithGoogleSuccess(serializedUser));
  } catch (error) {
    console.log(error);
    dispatch(signInWithGoogleFailure('Error while signing in with Google'));
  }
};
