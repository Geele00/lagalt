import { Link } from "@tanstack/react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent } from "react";
import { useUser } from "src/auth/AuthProvider/AuthProvider";
import { firebaseApp } from "src/index";
import "./style.scss";
// import firebase from "firebase/compat/app";
// import firebaseui from "firebaseui";
// import "firebaseui/dist/firebaseui.css";

export const LoggInn = () => {
  const { logIn } = useUser();

  const onSubmit = (e: any) => {
    e.preventDefault();
    // sanitize

    const email = e.target.email.value;
    const password = e.target.password.value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user: { email } }) => {
        if (!email) throw new Error();
        logIn({ email });
        return <Link to="/" />;
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login_title">
        <h1>Logg inn</h1>
      </div>
      <form className="login__form" onSubmit={onSubmit}>
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
