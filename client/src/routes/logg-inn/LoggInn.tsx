// import firebase from "firebase/compat/app";
// import firebaseui from "firebaseui";
// import "firebaseui/dist/firebaseui.css";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "src/auth/AuthProvider";
import { LoginInput } from "src/components/LoginInput/LoginInput";
import "./style.scss";

export const LoggInn = () => {
  const { signIn, authState } = useAuth();

  const nav = useNavigate();

  useEffect(() => {
    if (authState.token) nav({ to: "/" });
  }, [authState]);

  const onSubmit = (e: any) => {
    e.preventDefault();

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
        <LoginInput
          maxLength={15}
          type="text"
          name="username"
          placeholder="Brukernavn"
          className="login__username"
        />
        <LoginInput
          maxLength={40}
          type="email"
          name="email"
          placeholder="E-post"
          className="login__email"
        />
        <LoginInput
          maxLength={20}
          type="password"
          name="password"
          placeholder="Passord"
          className="login__password"
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
