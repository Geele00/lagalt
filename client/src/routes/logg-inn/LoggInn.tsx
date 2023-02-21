import { Link } from "@tanstack/react-router";
import "./style.scss";
// import firebase from "firebase/compat/app";
// import firebaseui from "firebaseui";
// import "firebaseui/dist/firebaseui.css";

export const LoggInn = () => {
  return (
    <section className="login__main">
      <section className="login">
        <div className="login_title">
          <h1>Logg inn</h1>
        </div>
        <form className="login__form">
          <input
            required
            type="text"
            minLength={5}
            maxLength={17}
            name="username"
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
      </section>
    </section>
  );
};
