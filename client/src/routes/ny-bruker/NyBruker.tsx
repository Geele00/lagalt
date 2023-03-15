import "./NyBruker.style.scss";
import { PointerEvent, useRef, useState, useTransition } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "src/auth/Auth.Provider";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createDbUser } from "src/api/v1/users/users";
import NavArrowBtn from "src/components/Button/NavArrowBtn";
import { AuthForm } from "./Forms/AuthForm";
import { UserForm } from "./Forms/UserForm";
import { auth } from "src/auth/firebase";

// const provider = new GoogleAuthProvider();

const NyBruker = () => {
  const { authState, signIn } = useAuth();
  const nav = useNavigate();
  const userFormRef = useRef<HTMLFormElement>(null);

  const [stage, setStage] = useState(1);

  const navigateForm = (e: PointerEvent<HTMLButtonElement>) => {
    const { direction } = e.currentTarget.dataset;

    console.log(e.currentTarget);

    switch (direction) {
      case "next":
        // validate
        setStage((prev) => prev + 1);
        break;
      case "prev":
        setStage((prev) => prev - 1);
        break;
    }
  };

  const dob = new Date(1994, 4, 4).toISOString();
  const password = "mockPassword";
  const mockUser = {
    username: "mockUser17",
    firstName: "Mock",
    lastName: "User",
    gender: 1,
    bio: "Mock bio",
    dob,
    profileStatus: 1,
    skills: [],
    email: "mockemail17@gmail.com",
    country: "Norge",
    city: "Oslo",
  };

  const dbNewUser = () => {
    const user = createDbUser(
      {
        ...mockUser,
        uid: "lskjf",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authState.token}`,
        },
      }
    );

    console.log(user);
  };

  const devNewUser = () => {
    createUserWithEmailAndPassword(auth, mockUser.email, password)
      .then(async ({ user }) => {
        if (!user) throw new Error();

        updateProfile(user, { displayName: mockUser.username, photoURL: "" });

        const token = await user.getIdToken();

        return { token, uid: user.uid };
      })
      .then(({ token, uid }) => {
        createDbUser(
          {
            ...mockUser,
            uid,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        signIn(token, mockUser.username);

        nav({ to: "/" });
      })
      .catch((err) => {
        auth.signOut();
        // delete newly created user from db
        console.log(err.code);
        console.log(err.message);
      });
  };

  return (
    <div className="signup">
      <button onPointerUp={devNewUser}>Dev cheatcode: Make user</button>
      <button onPointerUp={dbNewUser}>Dev cheatcode: Make DB user</button>
      <nav className="signup__nav">
        <NavArrowBtn onPointerUp={navigateForm} data-direction="prev" />
        <NavArrowBtn onPointerUp={navigateForm} data-direction="next" />
      </nav>
      {stage === 1 && <UserForm ref={userFormRef} />}
      {stage === 2 && <AuthForm />}
    </div>
  );
};

export default NyBruker;
