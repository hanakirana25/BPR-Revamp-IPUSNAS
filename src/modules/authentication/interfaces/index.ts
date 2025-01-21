export interface IAuthenticationStateStore {
  authentication_isLoading: boolean;
  authentication_token: string;
  authentication_userData: unknown;
}

export interface IAuthenticationLoginPayload {
  email: string;
  password: string;
}

export interface IAuthenticationSignUpPayload {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface IAuthenticationResponse {
  token: string;
  userData: unknown;
}
