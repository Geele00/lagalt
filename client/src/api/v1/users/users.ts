import { IUserPrivate, IUserPublic } from "src/types/models/User";
import { NewDbUser } from "./types";

const apiUri = import.meta.env.VITE_API_V1_URL + "/users";

export const fetchUsers = async (
  fetchOptions: RequestInit,
  params: string = ""
): Promise<IUserPublic[] | IUserPrivate[]> => {
  const res = await fetch(`${apiUri}${params}`, {
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const createDbUser = async (
  newDbUser: NewDbUser,
  options?: RequestInit
) => {
  const res = await fetch(apiUri, {
    ...options,
    method: "POST",
    body: JSON.stringify(newDbUser),
  });

  if (!res.ok) {
    return Promise.reject(res);
  }

  return res.json();
};
