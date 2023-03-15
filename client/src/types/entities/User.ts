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
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  gender?: string;
  dob: Date;
  bio: string;
  profileStatus: string;
  country: string;
  city: string;
}
