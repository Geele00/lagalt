import { IChatMessagePage } from "src/types/models/Chat";
import { SendMessage } from "src/types/models/Message";

const endpoint = import.meta.env.VITE_API_V1_URL + "/chats";

export const sendChatMessageFetch = async (
  body: SendMessage,
  token: string
): Promise<IChatMessagePage[]> =>
  fetch(`${endpoint}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err.statusText);
    });
