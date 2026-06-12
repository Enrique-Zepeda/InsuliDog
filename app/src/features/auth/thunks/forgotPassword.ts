import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendPasswordResetEmail } from "@/features/auth/services/authService";
import { getThunkErrorMessage } from "@/features/auth/utils/getThunkErrorMessage";
import type { AuthMessageResponse, ForgotPasswordCredentials } from "@/features/auth/types/auth.types";

export const forgotPassword = createAsyncThunk<AuthMessageResponse, ForgotPasswordCredentials, { rejectValue: string }>(
  "auth/forgotPassword",
  async (credentials, { rejectWithValue }) => {
    try {
      return await sendPasswordResetEmail(credentials);
    } catch (error) {
      return rejectWithValue(getThunkErrorMessage(error, "No se pudo enviar el correo de recuperación."));
    }
  },
);
