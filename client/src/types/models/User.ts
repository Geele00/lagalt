export interface IUserPrivate {
  userId: number;
  username: string;
  avatarUrl: string;
  profileStatus: "Public" | "Private";
  bio: string;
}

export interface IUserPublic extends IUserPrivate {
  firstName: string;
  lastName: string;
  age: number | null;
  gender: string;
  country: string;
  city: string;
  skills: [];
  projects: [];
}
