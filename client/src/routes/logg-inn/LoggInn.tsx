// import firebase from "firebase/compat/app";
// import firebaseui from "firebaseui";
// import "firebaseui/dist/firebaseui.css";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "src/auth/AuthProvider";
import { AuthInput } from "src/components/AuthInput";
import "./style.scss";

export const LoggInn = () => {
  const { signIn, authState } = useAuth();

  const nav = useNavigate();

  useEffect(() => {
    if (authState.signedIn) nav({ to: "/" });
  }, [authState]);

  const onSubmit = (e: any) => {
    e.preventDefault();

    // sanitize

    // usn:   sdlkfj@gmail.com
    //  pw:   ;lkj;lkj123

    const {
      email: { value: email },
      password: { value: password },
    } = e.target;

    signIn({ email, password });
  };

  return (
    <div className="login">
      <div className="login_title">
        <h1>Logg inn</h1>
      </div>

      <form className="login__form" onSubmit={onSubmit}>
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
          className="signup"
        />
        <AuthInput
          maxLength={20}
          type="password"
          name="password"
          placeholder="Passord"
          className="signup"
        />
        <button>Logg inn</button>
      </form>

      <section className="login_options">
        <Link to="glemt-passord">Glemt passord</Link>
        <Link to="ny-bruker">Ny bruker</Link>
      </section>

      <p className="login_google">Google Login</p>
      <p>Ny bruker</p>
    </div>
  );
};
