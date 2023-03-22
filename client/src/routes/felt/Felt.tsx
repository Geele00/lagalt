import { useParams } from "@tanstack/react-router";
import Feed from "src/features/Feed/Feed";

const Felt = () => {
  const { skill } = useParams();

  const filters = {
    size: 20,
    sort: "createdAt,desc",
    skill: skill || "",
  };

  return (
    <div className="skill-page">
      <h1>Prosjekter relatert til {skill}</h1>
      <Feed filters={filters} />
    </div>
  );
};

export default Felt;
