import { useQuery } from "@tanstack/react-query";
import { ErrorComponent, Link, useParams } from "@tanstack/react-router";
import { useMemo } from "react";
import { useAuth } from "src/auth/Auth.Provider";
import "./Profilside.style.scss";

const ProfilSide = () => {
  const { authState } = useAuth();
  const { username: usernameFromParams } = useParams();

  const placeholderData = [
    {
      userId: "",
      firstName: usernameFromParams,
      lastName: "",
      username: usernameFromParams,
      age: null,
      country: "",
      city: "",
      bio: "",
      avatarUrl: "",
      skills: [],
      projects: [],
      projectsContributingTo: [],
      gender: "",
      profileStatus: "",
    },
  ];

  const queryKey = [`/users`, authState, usernameFromParams];

  const { data, error } = useQuery({
    queryKey,
    meta: { params: `?username=${usernameFromParams}`, token: authState.token },
    enabled: !!authState.token,
    placeholderData,
  });

  const errorScreen = useMemo(() => {
    if (!error) return null;
    return <ErrorComponent error={error} />;
  }, [error]);

  const user = (data as any)[0];

  const isPublicProfile = user.profileStatus === "Public";

  return (
    <div className="profile">
      {errorScreen ?? (
        <>
          <header className="profile__header">
            <figure>
              <img src="/images/wes-portrait.jpg" alt="profile photo" />
              <figcaption>{`${user.firstName ?? user.username} ${
                user.lastName
              }`}</figcaption>
            </figure>

            <Link
              to="/$username/melding"
              params={{
                username: "testuser2",
              }}
              className="profile__header__message-btn"
            >
              Send melding
            </Link>
          </header>

          <section className="profile__projects">
            <h2>{user.firstName} sine prosjekter</h2>

            <ul>
              <li>Project1</li>
              <li>Project2</li>
            </ul>
          </section>

          <section className="profile__projects-contributing">
            <h2>{user.firstName} bidrar til disse prosjektene:</h2>

            <ul>
              <li>Project1</li>
              <li>Project2</li>
            </ul>
          </section>
        </>
      )}
    </div>
  );
};

export default ProfilSide;
