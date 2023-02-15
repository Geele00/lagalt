export const Signup = () => {
  return (
    <main>
      <div>
        <h1>Ny Bruker</h1>
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
