export interface LayoutState {
  loading: boolean;
  error: string | null;
  success: string | null;
}

export interface LoginData {
  userName: string;
  password: string;
}
