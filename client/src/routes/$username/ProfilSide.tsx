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

  const firstName = isPublicProfile ? user.firstName : user.username;
  const lastName = isPublicProfile ? user.lastName : "";
  const fullName = isPublicProfile ? `${firstName} ${lastName}` : user.username;

  return (
    <div className="profile">
      {errorScreen ?? (
        <>
          <header className="profile__header">
            <div className="profile__header__user-info">
              <img src="/images/wes-portrait.jpg" alt="profile photo" />
              <div className="profile__header__user-info__age-prof">
                <p>Programmerer</p>
                <p>27</p>
              </div>
              <h1>{fullName}</h1>
            </div>

            <Link
              to="/$username/melding"
              params={{
                username: "testuser2",
              }}
              className="profile__header__message-btn"
              title="Send melding"
            >
              <img src="/images/envelope.svg" />
            </Link>
          </header>

          {isPublicProfile && (
            <section className="profile__projects">
              <div>
                <label>
                  <input
                    type="radio"
                    name="project-view"
                    defaultChecked={true}
                  />
                  <span>Prosjekter</span>
                </label>

                <label>
                  <input type="radio" name="project-view" />
                  <span>Bidrar</span>
                </label>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default ProfilSide;
