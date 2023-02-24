import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "src/auth/AuthProvider";
import { AuthInput } from "src/components/AuthInput";
import { Button } from "src/components/Button";
import "./style.scss";
import { AuthFormEvent } from "./types";

export const NyBruker = () => {
  const { createUser } = useAuth();
  const nav = useNavigate();

  const onSubmit = async (e: AuthFormEvent) => {
    e.preventDefault();

    const {
      username: { value: username },
      email: { value: email },
      password: { value: password },
      passwordConfirmation: { value: passwordConfirmation },
    } = e.target;

    if (password !== passwordConfirmation) {
      // passwords don't match exception
    }

    try {
      await createUser(email, password, username);
    } catch (err) {
      nav({ to: "/" });
    }
  };

  return (
    <div className="signup">
      <div className="signup_title">
        <h1>Ny Bruker</h1>
      </div>
      <form className="signup_form" onSubmit={onSubmit}>
        <AuthInput
          name="username"
          placeholder="Brukernavn"
          className="signup"
        />
        <AuthInput name="email" placeholder="E-post" className="signup" />
        <AuthInput name="password" placeholder="Passord" className="signup" />
        <AuthInput
          name="passwordConfirmation"
          placeholder="Passord"
          className="signup"
        />
        <Button className="signup_submit-btn">Registrer</Button>
      </form>
    </div>
  );
};
