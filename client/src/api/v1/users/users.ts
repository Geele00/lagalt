import { IUserPrivate, IUserPublic } from "src/types/models/User";
import { defaultOptions } from "src/api/v1/defaults";
import { NewDbUser } from "./types";

const apiUri = import.meta.env.VITE_API_V1_URL + "/users";

export const fetchUsers = async (
  fetchOptions: RequestInit,
  params: string = ""
): Promise<IUserPublic[] | IUserPrivate[]> => {
  const res = await fetch(`${apiUri}${params}`, {
    ...defaultOptions,
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

// Når kompleksiteten øker vil du nok få utfordringer med fetchUsers, som skal håndtere alt :-) 
// tror du fort bare kan lage en fetch som gjør post. Du sparer ikke noe spes eller at det er lurt å kalle fetchusers.
// 
export const createDbUser = (newDbUser: NewDbUser, options?: RequestInit) =>
  fetchUsers({
    method: "POST",
    body: JSON.stringify(newDbUser),
    ...options,
  });
