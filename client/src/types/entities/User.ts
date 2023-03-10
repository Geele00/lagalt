export interface User {
  avatarUrl: string;

  username: string;

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
  username: string;
  email: string;
  uid: string;
}
