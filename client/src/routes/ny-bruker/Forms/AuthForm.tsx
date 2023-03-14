import "./Authform.style.scss";
import Button from "src/components/Button/Button";
import { Input } from "src/components/Input/Input";
import { AuthFormEvent } from "./AuthForms.types";

export const AuthForm = () => {
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

    console.log(username, email, password);

    // createDbUser({
    //   username,
    //   email,
    //   uid: "8kjlj8lkj",
    // });

    // const onSubmit = async (e: AuthFormEvent) => {
    //   e.preventDefault();
    //
    //   const {
    //     username: { value: username },
    //     email: { value: email },
    //     password: { value: password },
    //     passwordConfirmation: { value: passwordConfirmation },
    //   } = e.target;
    //
    //   if (password !== passwordConfirmation) {
    //     // passwords don't match exception
    //   }
    //
    //   try {
    //     createUser({ email, password, username });
    //     nav({ to: "/" });
    //   } catch (err) {
    //     // error logic
    //   }
    // };
  };

  return (
    <form className="signup__auth" onSubmit={onSubmit}>
      <Input
        required
        minLength={5}
        autoComplete="off"
        maxLength={40}
        type="email"
        name="email"
        placeholder="Epostadresse"
      />
      <Input
        required
        minLength={5}
        autoComplete="off"
        maxLength={30}
        type="password"
        name="password"
        placeholder="Passord"
      />
      <Input
        required
        minLength={5}
        autoComplete="off"
        maxLength={30}
        type="password"
        name="passwordConfirmation"
        placeholder="Passord"
      />
      <Button className="signup__auth__submit">Registrer</Button>

      <hr></hr>

      <button className="signup__auth__google">
        <img src="/google/web/2x/btn_google_signin_light_normal_web@2x.png" />
      </button>
    </form>
  );
};
