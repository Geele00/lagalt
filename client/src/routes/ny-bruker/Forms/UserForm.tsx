import "./UserForm.style.scss";
import { Input } from "src/components/Input/Input";
import { AuthFormEvent } from "./AuthForms.types";

export const UserForm = () => {
  const onSubmit = async (e: AuthFormEvent) => {
    e.preventDefault();

    const {
      username: { value: username },
      email: { value: email },
      password: { value: password },
      passwordConfirmation: { value: passwordConfirmation },
    } = e.target;

    if (password !== passwordConfirmation) {
      // passwords don't match exception
    }

    console.log(e.target);

    console.log(username, email, password);

    // createDbUser({
    //   username,
    //   email,
    //   uid: "8kjlj8lkj",
    // });

    // const onSubmit = async (e: AuthFormEvent) => {
    //   e.preventDefault();
    //
    //   const {
    //     username: { value: username },
    //     email: { value: email },
    //     password: { value: password },
    //     passwordConfirmation: { value: passwordConfirmation },
    //   } = e.target;
    //
    //   if (password !== passwordConfirmation) {
    //     // passwords don't match exception
    //   }
    //
    //   try {
    //     createUser({ email, password, username });
    //     nav({ to: "/" });
    //   } catch (err) {
    //     // error logic
    //   }
    // };
  };

  return (
    <form className="signup__user" onSubmit={onSubmit}>
      <button type="submit">SUBMITTTT!!!!</button>
      <Input
        maxLength={15}
        type="text"
        name="username"
        placeholder="Brukernavn"
      />
      <fieldset className="signup__user__name">
        <Input
          required
          minLength={3}
          autoComplete="off"
          maxLength={30}
          type="text"
          name="firstName"
          placeholder="Fornavn"
        />

        <Input
          required
          minLength={3}
          autoComplete="off"
          maxLength={30}
          type="text"
          name="lastName"
          placeholder="Etternavn"
        />
      </fieldset>

      <Input
        required
        minLength={3}
        autoComplete="off"
        maxLength={30}
        type="date"
        name="date"
        defaultValue={"1990-01-01"}
      />

      <fieldset className="signup__user__gender">
        <label>
          <Input
            required
            autoComplete="off"
            type="radio"
            name="gender"
            value="male"
          />
          <p>Mann</p>
        </label>
        <label>
          <Input
            required
            autoComplete="off"
            type="radio"
            name="gender"
            value="female"
          />
          <p>Kvinne</p>
        </label>
      </fieldset>

      <fieldset className="signup__user__location">
        <select>
          <option>Norge</option>
        </select>

        <select>
          <option>By</option>
          <option>Oslo</option>
        </select>
      </fieldset>

      <textarea
        autoComplete="off"
        name="bio"
        placeholder="Skriv litt om deg selv"
        className="signup__user__about-me"
      />

      <div className="signup__user__privacy">
        <label>Synlig profil</label>
        <input type="checkbox" name="privacy" />
      </div>

      <fieldset className="signup__user__auth">
        <Input
          required
          minLength={5}
          autoComplete="off"
          maxLength={40}
          type="email"
          name="email"
          placeholder="Epostadresse"
        />
        <Input
          required
          minLength={5}
          autoComplete="off"
          maxLength={30}
          type="password"
          name="password"
          placeholder="Passord"
        />
        <Input
          required
          minLength={5}
          autoComplete="off"
          maxLength={30}
          type="password"
          name="passwordConfirmation"
          placeholder="Passord"
        />
      </fieldset>
    </form>
  );
};
