import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginWithEmail } from "@/features/auth/services/authService";
import { getThunkErrorMessage } from "@/features/auth/utils/getThunkErrorMessage";
import type { LoginCredentials, LoginResponse } from "@/features/auth/types/auth.types";

export const loginUser = createAsyncThunk<LoginResponse, LoginCredentials, { rejectValue: string }>(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      return await loginWithEmail(credentials);
    } catch (error) {
      return rejectWithValue(getThunkErrorMessage(error, "No se pudo iniciar sesión."));
    }
  },
);
