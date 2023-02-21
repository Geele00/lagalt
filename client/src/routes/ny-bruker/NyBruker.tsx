import { useMutation } from "@tanstack/react-query";
import { createUser } from "src/api/v1/users";
import { User } from "src/types/entities/User";
import "./style.scss";

export const NyBruker = () => {
  const createUserMutation = useMutation({
    mutationFn: (newUser: User) => {
      return createUser(newUser);
    },
  });

  return (
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
  );
};
