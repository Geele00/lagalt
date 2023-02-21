import { Link } from "@tanstack/react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "src/auth/AuthProvider";
import { AuthInput } from "src/components/AuthInput";
import "./style.scss";
// import firebase from "firebase/compat/app";
// import firebaseui from "firebaseui";
// import "firebaseui/dist/firebaseui.css";

export const LoggInn = () => {
  const { logIn } = useAuth();

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
        <AuthInput
          name="username"
          placeholder="Brukernavn"
          className="signup"
        />
        <AuthInput name="email" placeholder="E-post" className="signup" />
        <AuthInput name="password" placeholder="Passord" className="signup" />
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
