import { defaultOptions } from "src/api/v1/defaults";
import { IChatMessagePage } from "src/types/models/Chat";
import { SendMessage } from "src/types/models/Message";

const endpoint = import.meta.env.VITE_API_V1_URL + "/chats";

export const sendChatMessageFetch = async (
  body: SendMessage,
  token: string
): Promise<IChatMessagePage[]> => {
  // Denne ville aldri gått inn i error. 
  // du kan gjøre det slik eller smelle det inn i en try catch- Your choice :-) 
  return fetch(`${endpoint}`, {
    ...defaultOptions,
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  .then((res) => res.json())
  .catch((err) => {
    throw new Error(err.statusText)
  });

};
