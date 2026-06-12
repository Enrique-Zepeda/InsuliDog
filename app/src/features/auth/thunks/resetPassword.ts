import { createAsyncThunk } from "@reduxjs/toolkit";
import { updatePassword } from "@/features/auth/services/authService";
import { getThunkErrorMessage } from "@/features/auth/utils/getThunkErrorMessage";
import type { AuthMessageResponse, UpdatePasswordCredentials } from "@/features/auth/types/auth.types";

export const resetPassword = createAsyncThunk<AuthMessageResponse, UpdatePasswordCredentials, { rejectValue: string }>(
  "auth/resetPassword",
  async (credentials, { rejectWithValue }) => {
    try {
      return await updatePassword(credentials);
    } catch (error) {
      return rejectWithValue(getThunkErrorMessage(error, "No se pudo actualizar la contraseña."));
    }
  },
);
