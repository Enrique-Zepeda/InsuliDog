import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setTheme as setThemeAction, type Theme } from "../slices/themeSlice";

export function useTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const setTheme = (newTheme: Theme) => {
    dispatch(setThemeAction(newTheme));
  };

  return {
    theme,
    setTheme,
  };
}
