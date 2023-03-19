import { useNavigate } from "@tanstack/react-router";
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { NewDbUser } from "src/api/v1/users/types";
import { createDbUser } from "src/api/v1/users/users";
import { useAuth } from "./Auth.Provider";

export const useCreateUser = (
  password: string,
  newDbUser: NewDbUser,
  auth: Auth
) => {
  const { signIn } = useAuth();
  const nav = useNavigate();

  createUserWithEmailAndPassword(auth, newDbUser.email, password)
    .then(async ({ user }) => {
      if (!user) throw new Error();

      updateProfile(user, {
        displayName: newDbUser.username,
        photoURL: newDbUser.avatarUrl || "",
      });

      return await user.getIdToken();
    })
    .then((token) => {
      signIn(token, newDbUser.username);

      createDbUser(
        { ...newDbUser },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      nav({ to: "/" });
    })
    .catch((err) => {
      auth.signOut();
      // delete newly created user from db
      console.log(err.code);
      console.log(err.message);
    });
};
