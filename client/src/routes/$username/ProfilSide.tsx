import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { fetchUsers } from "src/api/v1/users/users";
import { useAuth } from "src/auth/Auth.Provider";
import "./Profilside.style.scss";

const user = {
  firstName: "Wes",
  lastName: "Keiser",
  username: "weskeiser",
  email: "post@weskeiser.no",
  dob: "1994-11-03",
  country: "Norway",
  city: "Oslo",
  bio: "Wes is a Wes from Wes.",
  skills: ["programming", "sleeping"],
  history: [
    {
      seenProjects: [],
      clickedProjects: [],
    },
  ],
  projects: [],
  projectsContributingTo: [],
};

const ProfilSide = () => {
  const { authState } = useAuth();
  const { username } = useParams();

  const nav = useNavigate();

  const { data, error } = useQuery({
    queryKey: [`/users`, authState, username],
    meta: { params: `?username=${username}` },
    // queryFn: () => {
    //   const { token } = authState;
    //
    //   const headers = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };
    //
    //   return authState.username ? fetchUsers(headers) : null;
    // },
  });

  console.log(username);
  console.log(data && data);
  console.log(error && error);

  return (
    <div className="profile">
      <header className="profile__header">
        <figure>
          <img src="/images/wes-portrait.jpg" alt="profile photo" />
          <figcaption>{`${user.firstName} ${user.lastName}`}</figcaption>
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

      {/*
        <section className="profile__info">
          <table>
            <tbody>
              <tr>
                <th>Alder</th>
                <td>28</td>
              </tr>
              <tr>
                <th>Land</th>
                <td>Norge</td>
              </tr>
              <tr>
                <th>By</th>
                <td>Oslo</td>
              </tr>
            </tbody>
          </table>
        </section>
        */}

      <section className="profile__projects">
        <h2>{user.username} sine prosjekter</h2>

        <ul>
          <li>Project1</li>
          <li>Project2</li>
        </ul>
      </section>

      <section className="profile__projects-contributing">
        <h2>{user.username} bidrar til disse prosjektene:</h2>

        <ul>
          <li>Project1</li>
          <li>Project2</li>
        </ul>
      </section>
    </div>
  );
};

export default ProfilSide;
