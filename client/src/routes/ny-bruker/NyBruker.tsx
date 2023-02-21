import { useMutation } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
} from "firebase/auth";
import { createUser } from "src/api/v1/users";
import { useUser } from "src/auth/AuthProvider/AuthProvider";
import { firebaseApp } from "src/index";
import { User } from "src/types/entities/User";
import "./style.scss";

export const NyBruker = () => {
  // const createUserMutation = useMutation({
  //   mutationFn: (newUser: UserCredential) => {
  //     // return createUser(newUser);
  //   },
  // });

  const { logIn } = useUser();

  const onSubmit = (e: any) => {
    e.preventDefault();
    // sanitize

    const { username, email, password } = e.target;
    //check if username taken

    const auth = getAuth(firebaseApp);

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
        <input
          required
          type="text"
          minLength={5}
          maxLength={17}
          name="username"
          placeholder="Brukernavn"
          autoComplete="off"
        />
        <input
          required
          type="text"
          minLength={5}
          maxLength={17}
          name="email"
          placeholder="E-post"
          autoComplete="off"
        />
        <input
          required
          type="text"
          minLength={5}
          maxLength={17}
          name="password"
          placeholder="Passord"
          autoComplete="off"
        />
        <input
          required
          type="text"
          minLength={5}
          maxLength={17}
          name="passwordConfirm"
          placeholder="Passord"
          autoComplete="off"
        />
        <button />
      </form>
    </div>
  );
};
