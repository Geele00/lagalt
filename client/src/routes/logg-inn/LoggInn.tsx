import { Link, useNavigate } from "@tanstack/react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useAuth } from "src/auth/Auth.Provider";
import { auth } from "src/auth/firebase";
import { Input } from "src/components/Input/Input";
import "./LoggInn.style.scss";

const LoggInn = () => {
  const { signIn, authState } = useAuth();

  const nav = useNavigate();

  useEffect(() => {
    const { username } = authState;
    if (!!username && username !== "anon") nav({ to: "/" });
  }, [authState]);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const {
      email: { value: email },
      password: { value: password },
    } = e.target;

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken().then((token) => {
          signIn(token, user.displayName);
        });
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
        // handle errors
      });
  };

  const devLogin = () => {
    signInWithEmailAndPassword(auth, "lkjlkj@gmail.com", "lkjlkj123")
      .then(({ user }) => {
        user.getIdToken().then((token) => {
          signIn(token, user.displayName);
        });
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
  };

  return (
    <div className="login">
      <button onPointerUp={devLogin}>Cheatcode: devLogin</button>
      <form className="login__form" onSubmit={onSubmit}>
        {/* <Input
          maxLength={15}
          type="text"
          name="username"
          placeholder="Brukernavn"
          className="login__username"
        /> */}
        <Input
          maxLength={40}
          type="email"
          name="email"
          placeholder="E-post"
          className="login__email"
        />
        <Input
          maxLength={20}
          type="password"
          name="password"
          placeholder="Passord"
          className="login__password"
        />
        <button className="login-button">Logg inn</button>
      </form>

      <section className="login_options">
        <Link to="glemt-passord">Glemt passord</Link>
        {/* <Link to="ny-bruker">Ny bruker</Link> */}
      </section>

      <p className="login_google">Google Login</p>
      <p>Ny bruker</p>
    </div>
  );
};

export default LoggInn;
