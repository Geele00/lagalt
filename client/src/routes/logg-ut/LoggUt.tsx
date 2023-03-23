import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "src/auth/Auth.Provider";

const LoggUt = () => {
  const { signOut } = useAuth();

  useEffect(() => signOut(), []);

  return (
    <div>
      <p>Signout logic</p>
      <Link to="/">Ta meg til forsiden</Link>
    </div>
  );
};
export default LoggUt;
