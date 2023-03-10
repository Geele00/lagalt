import { defaultOptions } from "src/api/v1/defaults";
import { SendMessage } from "src/types/entities/Message";

const endpoint = import.meta.env.VITE_API_V1_URL + "/chats";

export const fetchChats = async (
  fetchOptions?: RequestInit,
  params: string = ""
): Promise<any> => {
  const res = await fetch(`${endpoint}${params}`, {
    ...defaultOptions,
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};
