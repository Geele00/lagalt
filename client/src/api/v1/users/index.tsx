import { User } from "src/types/entities/User";

const apiUrl = import.meta.env.VITE_API_V1_URL + "/users";

const defaultOptions: RequestInit = {
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchUsers = async (
  fetchOptions?: RequestInit
): Promise<User[]> => {
  const res = await fetch(apiUrl, { ...defaultOptions, ...fetchOptions });

  if (!res.ok) {
    throw new Error("Network error.");
  }

  return res.json();
};

export const createUser = (user: User) =>
  fetchUsers({
    method: "POST",
    body: JSON.stringify(user),
  });
