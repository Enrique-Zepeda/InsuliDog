import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerWithEmail } from "@/features/auth/services/authService";
import { getThunkErrorMessage } from "@/features/auth/utils/getThunkErrorMessage";
import type { RegisterCredentials, RegisterResponse } from "@/features/auth/types/auth.types";

export const registerUser = createAsyncThunk<RegisterResponse, RegisterCredentials, { rejectValue: string }>(
  "auth/registerUser",
  async (credentials, { rejectWithValue }) => {
    try {
      return await registerWithEmail(credentials);
    } catch (error) {
      return rejectWithValue(getThunkErrorMessage(error, "No se pudo crear la cuenta."));
    }
  },
);
