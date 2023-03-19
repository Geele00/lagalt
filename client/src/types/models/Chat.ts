import { IPage } from "./Page";

export interface IChatMessage {
  messageId: number;
  content: string;
  authorUsername: string;
  recipientUsername: string;
  createdAt: string;
}

export type IChatMessagePage = IPage<IChatMessage>;
