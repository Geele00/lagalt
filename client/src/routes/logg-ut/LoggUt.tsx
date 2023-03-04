import { useEffect } from "react";
import { useAuth } from "src/auth";
import { Link } from "src/utils/tanstack";

export const LoggUt = () => {
  const { signOut, authState } = useAuth();

  useEffect(() => {
    signOut();
  }, []);

  return (
    <div>
      <p>Signout logic</p>
      <Link to="/">Ta meg til forsiden</Link>
    </div>
  );
};
