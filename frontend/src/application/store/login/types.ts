export type LoginState = {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
};
