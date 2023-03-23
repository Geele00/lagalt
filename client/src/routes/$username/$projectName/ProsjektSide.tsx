import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { useAuth } from "src/auth/Auth.Provider";
import { ColoredCircle } from "src/components/ColoredCircle/ColoredCircle";
import { HrDivider } from "src/components/HrDivider/HrDivider";
import "./ProsjektSide.style.scss";

const sampleProject = {
  id: 55,
  title: "Tittel",
  description: "Prosjektbeskrivelse. Blablabla.",
  industry: "Spillutvikling",
  owner: "Spacepeloton",
  collaborators: ["daftPunk", "scienceGuy", "LIONKING"],
  openRoles: ["forsker", "romingeniør", "mekaniker", "drømmer"],
  country: "Norge",
  city: "Oslo",
};

const ProsjektSide = () => {
  const { authState } = useAuth();
  const { projectName } = useParams();

  const filters = {
    title: projectName?.split("-").join(" "),
  };

  const { data } = useQuery({
    queryKey: ["/projects", { filters, token: authState.token }],
    enabled: !!authState.token,
  });

  console.log(data);

  return (
    <div className="project-page">
      <header className="project-page__header">
        <ul className="project-page__header__circles">
          <li title="Fotograf">
            <ColoredCircle color="#000000" />
          </li>

          <li title="Koder">
            <ColoredCircle color="#3c8b2e" />
          </li>
        </ul>

        <p className="project-page__header__industry">
          {sampleProject.industry}
        </p>
      </header>

      <hr />

      <section className="project-page__main">
        <h1>{sampleProject.title}</h1>

        <button className="join">
          <img src="/images/socket.svg" />
        </button>

        <table className="project-page__main__details">
          <tbody>
            <tr>
              <th scope="row">Sted:</th>
              <td>
                {sampleProject.city}, {sampleProject.country}
              </td>
            </tr>

            <tr>
              <th scope="row">Leder:</th>
              <td>{sampleProject.owner}</td>
            </tr>

            <tr>
              <th scope="row">Brukere:</th>
              {sampleProject.collaborators.map((user) => (
                <td key={user}>{user}</td>
              ))}
            </tr>

            <tr>
              <th scope="row">Ønsket:</th>
              {sampleProject.openRoles.map((role) => (
                <td className="capitalize" key={role}>
                  {role}
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <p className="project-page__main__description">
          {sampleProject.description}
        </p>
      </section>

      <HrDivider />

      <nav className="project-page__nav">
        <button>
          <img src="/images/wrench.svg" />
        </button>
        <button>
          <img src="/images/wrench.svg" />
        </button>
        <button>
          <img src="/images/chat-bubble.svg" />
        </button>
        <button>
          <img src="/images/home.svg" />
        </button>
      </nav>
    </div>
  );
};

export default ProsjektSide;

// <section className="project-page__suggestions">
//   <ProjectPreview
//     title="Prosjekt1"
//     description="Blablablalbal"
//     className="project-page__suggestions-preview"
//   />
//   <ProjectPreview
//     title="Prosjekt1"
//     description="Blablablalbal"
//     className="project-page__suggestions-preview"
//   />
//   <ProjectPreview
//     title="Prosjekt1"
//     description="Blablablalbal"
//     className="project-page__suggestions-preview"
//   />
// </section>
