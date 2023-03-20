import "./NyBruker.style.scss";
import { useState } from "react";
import { auth } from "src/auth/firebase";
import { AuthFormEvent } from "./NyBruker.types";
import { Input } from "src/components/Input/Input";
import Button from "src/components/Button/Button";
import { NewDbUser } from "src/api/v1/users/types";
import { HrDivider } from "src/components/HrDivider/HrDivider";
import { useCreateUser } from "src/auth/useCreateUser";

// const provider = new GoogleAuthProvider();

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

const NyBruker = () => {
  const [passwordNotMatching, setPasswordNotMatching] = useState(false);

  const onSubmit = async (e: AuthFormEvent) => {
    e.preventDefault();
    setPasswordNotMatching(false);

    const {
      password: { value: password },
      passwordConfirmation: { value: passwordConfirmation },
    } = e.target;

    if (password !== passwordConfirmation) {
      setPasswordNotMatching(true);
      return;
    }

    const newDbUser = {};

    for (const entry of e.target) {
      const { name, value } = entry as HTMLInputElement;
      if (!name || name.startsWith("password")) continue;
      Object.assign(newDbUser, { [name]: value });
    }

    useCreateUser(password, newDbUser as NewDbUser, auth);
  };

  return (
    <div className="signup">
      {passwordNotMatching && <p>Passordene er ikke like</p>}
      {/* <button onPointerUp={() => createFbAndDbUser("lksdjf", mockUser)}>
        Dev cheatcode: Make user
      </button>
      */}
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

        <HrDivider />

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
