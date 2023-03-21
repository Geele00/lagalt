import { IChatMessagePage } from "src/types/models/Chat";
import { SendMessage } from "src/types/models/Message";

const endpoint = import.meta.env.VITE_API_V1_URL + "/chats";

export const sendChatMessageFetch = async (
  body: SendMessage,
  token: string
): Promise<IChatMessagePage[]> => {
  const res = await fetch(`${endpoint}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return Promise.reject(res);
  }

  return res.json();
};
