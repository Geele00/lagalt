export interface User {
  avatarUrl: string;

  userName: string;

  email: string;

  gender: string;

  bio: string;

  country: string;

  city: string;

  skills: [];

  history: [];

  projects: [];
}

export interface NewDbUser {
  userName: string;
  email: string;
  uid: string;
}
