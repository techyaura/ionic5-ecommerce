export type IGender = 'Male' | 'Female'; 

export interface IUser {
  email: string;
  password: string;
}

export interface ISessionUser {
  email: string;
  name?: string;
  gender?: IGender;
  phone?: string;
  city?: string;
  address?: string;
}

export interface ISession {
  token: string;
  user: ISessionUser;
}
