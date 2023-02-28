import { NewDbUser, User } from "src/types/entities/User";
import { defaultOptions } from "src/api/v1/defaults";

const apiUrl = import.meta.env.VITE_API_V1_URL + "/users";

export const fetchUsers = async (
  fetchOptions?: RequestInit
): Promise<User[]> => {
  const res = await fetch(apiUrl, {
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
