import "./style.scss";
import { useNavigate } from "src/utils/tanstack";
import { useAuth } from "src/auth";
import { AuthInput, Button } from "src/components";
import { AuthFormEvent } from "./types";

export const NyBruker = () => {
  const { createFirebaseUser } = useAuth();
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
      createFirebaseUser(email, password, username);
      nav({ to: "/" });
    } catch (err) {
      // error logic
    }
  };

  return (
    <div className="signup">
      <div className="signup_title">
        <h1>Ny Bruker</h1>
      </div>
      <form className="signup_form" onSubmit={onSubmit}>
        <AuthInput
          maxLength={15}
          type="text"
          name="username"
          placeholder="Brukernavn"
          className="signup"
        />
        <AuthInput
          maxLength={40}
          type="email"
          name="email"
          placeholder="E-post"
          className="mail"
        />
        <AuthInput
          maxLength={20}
          type="password"
          name="password"
          placeholder="Passord"
          className="password"
        />
        <AuthInput
          maxLength={20}
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          className="password"
        />
        <Button className="signup_submit-btn">Registrer</Button>
      </form>
    </div>
  );
};
