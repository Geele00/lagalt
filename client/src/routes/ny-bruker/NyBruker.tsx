import { Link } from "@tanstack/react-router";
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { useAuth } from "src/auth/AuthProvider";
import { AuthInput } from "src/components/AuthInput";
import { Button } from "src/components/Button";
import "./style.scss";
import { AuthFormEvent } from "./types";

export const NyBruker = () => {
  // const createUserMutation = useMutation({
  //   mutationFn: (newUser: UserCredential) => {
  //     // return createUser(newUser);
  //   },
  // });

  const { logIn, firebaseApp } = useAuth();

  const onSubmit = (e: AuthFormEvent) => {
    e.preventDefault();
    // sanitize

    const { username, email, password } = e.target;
    //check if username taken

    const auth = getAuth(firebaseApp);
    connectAuthEmulator(auth, "http://localhost:9099");

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user: { email: returnedEmail } }) => {
        if (!returnedEmail) throw new Error();

        logIn({ email });
        return <Link to="/" />;
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
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
