import { useQuery } from "@tanstack/react-query";
import { IUserPrivate, IUserPublic } from "src/types/models/User";
import { ErrorComponent, Link, useParams } from "@tanstack/react-router";
import { useMemo } from "react";
import { useAuth } from "src/auth/Auth.Provider";
import { DefaultError } from "src/types/defaults/DefaultError";
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

  const queryKey = [
    `/users`,
    { filters: { username: usernameFromParams }, token: authState.token },
  ];

  const { data, error } = useQuery({
    queryKey,
    enabled: !!authState.token,
    placeholderData,
  });

  const errorScreen = useMemo(() => {
    if (!error) return null;
    return <ErrorComponent error={error} />;
  }, [error]);

  const user = data ? data[0] : placeholderData[0];

  const isPublicProfile = user.profileStatus === "PUBLIC";

  console.log(user.profileStatus);
  const firstName = isPublicProfile ? user.firstName : user.username;
  const lastName = isPublicProfile ? user.lastName : "";
  const fullName = isPublicProfile ? `${firstName} ${lastName}` : user.username;

  return (
    <div className="profile">
      {errorScreen ?? (
        <>
          <header className="profile__header">
            <figure>
              <img src="/images/wes-portrait.jpg" alt="profile photo" />
              <figcaption>{fullName}</figcaption>
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

          {isPublicProfile && (
            <>
              <section className="profile__projects">
                <h2>Egne prosjekter</h2>

                <ul>
                  <li>Project1</li>
                  <li>Project2</li>
                </ul>
              </section>

              <section className="profile__projects-contributing">
                <h2>Bidrar til disse prosjektene:</h2>

                <ul>
                  <li>Project1</li>
                  <li>Project2</li>
                </ul>
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProfilSide;
