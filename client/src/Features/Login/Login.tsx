import "./Login.scss";

export const Login = () => {
  return (
    <main>
      <div className="login">
        <div className="login_title">
          <h1>Logg inn</h1>
        </div>
        <form>
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
          <button />
        </form>
      </div>
    </main>
  );
};
