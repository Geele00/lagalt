import { Outlet } from "@tanstack/react-router";

export const Profile = () => {
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

  return (
    <main className="profile">
      <h1>{user.username}</h1>

      <section className="profile__info">
        <table>
          <tbody>
            <tr>
              <th>Navn</th>
              <td>
                {user.firstName} {user.lastName}
              </td>
            </tr>
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

        <div className="profile__info_photo">photo</div>
      </section>

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
    </main>
  );
};
