export interface User {
  id: number;

  avatarUrl: string;

  username: string;

  firstName: string;

  lastName: string;

  dob: Date;

  dateOfCreation: Date;

  email: string;

  gender: string;

  // roles,

  bio: string;

  skills: [];

  history: [];

  projects: [];

  country: null;
}

export interface NewDbUser {
  username: string;
  email: string;
  uid: string;
}
