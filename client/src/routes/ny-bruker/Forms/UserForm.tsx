import "./UserForm.style.scss";
import { forwardRef } from "react";
import { Input } from "src/components/Input/Input";

export const UserForm = forwardRef(({}, ref: any) => {
  return (
    <form className="signup__user" ref={ref}>
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
    </form>
  );
});
