import "./style.scss";
import { useNavigate } from "src/utils/tanstack";
import { useAuth } from "src/auth";
import { LoginInput, Button } from "src/components";
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
      createUser({ email, password, username });
      nav({ to: "/" });
    } catch (err) {
      // error logic
    }
  };

  return (
    <div className="signup">
      <div className="signup__title">
        <h1>Ny Bruker</h1>
      </div>
      <form className="signup__form" onSubmit={onSubmit}>
        <LoginInput
          maxLength={15}
          type="text"
          name="username"
          placeholder="Brukernavn"
          className="username"
        />
        <LoginInput
          maxLength={40}
          type="email"
          name="email"
          placeholder="E-post"
          className="mail"
        />
        <LoginInput
          maxLength={20}
          type="password"
          name="password"
          placeholder="Passord"
          className="password"
        />
        <LoginInput
          maxLength={20}
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          className="password confirmation"
        />
        <Button className="signup_submit-btn">Registrer</Button>
      </form>
    </div>
  );
};
