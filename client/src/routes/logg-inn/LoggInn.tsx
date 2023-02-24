import { Link } from "@tanstack/react-router";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "src/auth/AuthProvider";
import { AuthInput } from "src/components/AuthInput";
import "./style.scss";
// import firebase from "firebase/compat/app";
// import firebaseui from "firebaseui";
// import "firebaseui/dist/firebaseui.css";

export const LoggInn = () => {
  const { signIn, auth } = useAuth();

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    console.log(auth);
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    // sanitize

    // usn:   sdlkfj@gmail.com
    //  pw:   ;lkj;lkj123

    const {
      email: { value: email },
      password: { value: password },
    } = e.target;

    try {
      signIn({ email, password });
    } catch (err) {
      return <Link to="/" />;
    }
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
