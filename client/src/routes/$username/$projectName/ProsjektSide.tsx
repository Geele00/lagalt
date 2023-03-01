import { useQuery, useParams } from "src/utils/tanstack";
import { ProjectPreview } from "src/components";
import "./style.scss";

const sampleProject = {
  id: 55,
  title: "Space Mission",
  description: "Vi vil reise til Mars. Uten teknologi. På sykler. Fra Oslo.",
  industry: "romfart",
  owner: "Spacepeloton",
  collaborators: ["daftPunk", "scienceGuy", "LIONKING"],
  openRoles: ["forsker", "romingeniør", "mekaniker", "drømmer"],
  country: "Norge",
  city: "Oslo",
};

// const Detail = ({ k, v }: any) => {
//   return (
//     <tr>
//       <th>{k}</th>
//       <td>{v}</td>
//     </tr>
//   );
// };

export const ProsjektSide = () => {
  const { data } = useQuery(["project"]);
  const { projectName } = useParams();
  console.log(projectName);

  return (
    <div className="project-page">
      <section className="project-page__main">
        <h1>{sampleProject.title}</h1>

        <table className="project-page__main__details">
          <tbody>
            <tr>
              <th scope="row">Felt:</th>
              <td className="capitalize">{sampleProject.industry}</td>
            </tr>

            <tr>
              <th scope="row">Sted:</th>
              <td>
                {sampleProject.city}, {sampleProject.country}
              </td>
            </tr>

            <tr>
              <th scope="row">Eier:</th>
              <td>{sampleProject.owner}</td>
            </tr>

            <tr>
              <th scope="row">Folka:</th>
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

      <section className="project-page__suggestions">
        <ProjectPreview
          title="Prosjekt1"
          description="Blablablalbal"
          className="project-page__suggestions-preview"
        />
        <ProjectPreview
          title="Prosjekt1"
          description="Blablablalbal"
          className="project-page__suggestions-preview"
        />
        <ProjectPreview
          title="Prosjekt1"
          description="Blablablalbal"
          className="project-page__suggestions-preview"
        />
      </section>
    </div>
  );
};
