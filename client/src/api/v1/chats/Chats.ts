import { defaultOptions } from "src/api/v1/defaults";
import { IChatMessagePage } from "src/types/entities/Chat";
import { SendMessage } from "src/types/entities/Message";

const endpoint = import.meta.env.VITE_API_V1_URL + "/chats";

export const fetchChats = async (
  fetchOptions?: RequestInit,
  params: string = ""
): Promise<IChatMessagePage> => {
  const res = await fetch(`${endpoint}${params}`, {
    ...defaultOptions,
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const sendChatMessage = async (
  body: SendMessage,
  token: string
): Promise<Response> => {
  const res = await fetch(`${endpoint}`, {
    ...defaultOptions,
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  console.log(res);

  return res;
};
