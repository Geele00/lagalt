import { UserPrivate, UserPublic } from "src/types/entities/User";
import { defaultOptions } from "src/api/v1/defaults";
import { NewDbUser } from "./types";

const apiUri = import.meta.env.VITE_API_V1_URL + "/users";

export const fetchUsers = async (
  fetchOptions: RequestInit,
  params: string = ""
): Promise<UserPublic[] | UserPrivate[]> => {
  const res = await fetch(`${apiUri}${params}`, {
    ...defaultOptions,
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const createDbUser = (newDbUser: NewDbUser, options?: RequestInit) =>
  fetchUsers({
    method: "POST",
    body: JSON.stringify(newDbUser),
    ...options,
  });
