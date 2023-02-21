import { FormEvent } from "react";

export interface AuthForm extends HTMLFormElement {
  username: string;
  email: string;
  password: string;
}

export interface AuthFormEvent extends FormEvent<AuthForm> {
  target: HTMLFormElement;
}
