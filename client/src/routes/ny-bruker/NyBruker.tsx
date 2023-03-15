import "./NyBruker.style.scss";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "src/auth/Auth.Provider";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createDbUser } from "src/api/v1/users/users";
import { auth } from "src/auth/firebase";
import { AuthFormEvent } from "./NyBruker.types";
import { Input } from "src/components/Input/Input";
import Button from "src/components/Button/Button";
import { NewDbUser } from "src/api/v1/users/types";

// const provider = new GoogleAuthProvider();

const NyBruker = () => {
  const { authState, signIn } = useAuth();
  const nav = useNavigate();

  const mockUser = {
    username: "mockUser20",
    email: "testmail3@gmail.com",
    firstName: "Mock",
    lastName: "User",
    gender: 1,
    bio: "Mock bio",
    dob: new Date(1994, 4, 4).toISOString(),
    profileStatus: 1,
    skills: [],
    country: "Norge",
    city: "Oslo",
  };

  const dbNewUser = () => {
    const user = createDbUser(
      {
        ...mockUser,
        password: "mockPassword",
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

  const createFbAndDbUser = (
    password: string = "mockPassword",
    newDbUser: NewDbUser = mockUser
  ) => {
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

  const onSubmit = async (e: AuthFormEvent) => {
    e.preventDefault();
    console.log(e);

    const {
      username: { value: username },
      email: { value: email },
      password: { value: password },
      passwordConfirmation: { value: passwordConfirmation },
      firstName: { value: firstName },
      lastName: { value: lastName },
      gender: { value: gender },
      bio: { value: bio },
      dob: { value: dob },
      profileStatus: { value: profileStatus },
      country: { value: country },
      city: { value: city },
    } = e.target;

    const newDbUser: NewDbUser = {
      username,
      email,
      firstName,
      lastName,
      gender,
      bio,
      dob,
      profileStatus,
      country,
      city,
    };

    if (password !== passwordConfirmation) {
      // passwords don't match exception
    }

    createFbAndDbUser(password, newDbUser);
  };

  return (
    <div className="signup">
      <button onPointerUp={() => createFbAndDbUser()}>
        Dev cheatcode: Make user
      </button>
      <button onPointerUp={dbNewUser}>Dev cheatcode: Make DB user</button>
      <form className="signup__form" onSubmit={onSubmit}>
        <button className="signup__form__google">
          <img src="/google/web/2x/btn_google_signin_light_normal_web@2x.png" />
        </button>

        <fieldset className="signup__form__auth">
          <Input
            // required
            // minLength={5}
            autoComplete="off"
            maxLength={40}
            type="email"
            name="email"
            placeholder="Epostadresse"
          />
          <Input
            // required
            // minLength={5}
            autoComplete="off"
            maxLength={30}
            type="password"
            name="password"
            placeholder="Passord"
          />
          <Input
            // required
            // minLength={5}
            autoComplete="off"
            maxLength={30}
            type="password"
            name="passwordConfirmation"
            placeholder="Passord"
          />
        </fieldset>

        <hr />

        <Input
          // maxLength={15}
          type="text"
          name="username"
          placeholder="Brukernavn"
        />
        <fieldset className="signup__form__name">
          <Input
            // required
            // minLength={3}
            autoComplete="off"
            maxLength={30}
            type="text"
            name="firstName"
            placeholder="Fornavn"
          />

          <Input
            // required
            minLength={3}
            autoComplete="off"
            maxLength={30}
            type="text"
            name="lastName"
            placeholder="Etternavn"
          />
        </fieldset>

        <Input
          // required
          // minLength={3}
          autoComplete="off"
          maxLength={30}
          type="date"
          name="dob"
          defaultValue={"1990-01-01"}
        />

        <fieldset className="signup__form__gender">
          <label>
            <Input
              // required
              autoComplete="off"
              type="radio"
              name="gender"
              value="male"
            />
            <p>Mann</p>
          </label>
          <label>
            <Input
              // required
              autoComplete="off"
              type="radio"
              name="gender"
              value="female"
            />
            <p>Kvinne</p>
          </label>
        </fieldset>

        <fieldset className="signup__form__location">
          <select name="country">
            <option>Norge</option>
          </select>

          <select name="city">
            <option>By</option>
            <option>Oslo</option>
          </select>
        </fieldset>

        <textarea
          autoComplete="off"
          name="bio"
          placeholder="Skriv litt om deg selv"
          className="signup__form__about-me"
        />

        <div className="signup__form__privacy">
          <input type="checkbox" name="profileStatus" />
          <label>Privat profil</label>
        </div>

        <Button className="signup__form__submit">Registrer</Button>
      </form>
    </div>
  );
};

export default NyBruker;
