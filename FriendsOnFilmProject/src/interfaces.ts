export interface ICredentials {
  email?: string;
  username: string;
  password: string;
};

export interface ICredentialsResponse {
  emailExists: boolean;
  usernameExists: boolean;
  passwordExists: boolean;
}