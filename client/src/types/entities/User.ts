export interface UserPrivate {
  userId: number;
  username: string;
  avatarUrl: string;
  profileStatus: boolean;
  bio: string;
}

export interface UserPublic extends UserPrivate {
  age: number;
  gender: string;
  country: string;
  city: string;
  skills: [];
  projects: [];
}
