import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "src/auth/Auth.Provider";
import "./LoggUtStyle.scss"

const LoggUt = () => {
  const { signOut } = useAuth();

  useEffect(() => signOut(), []);

  return (
    <div className="log-out-page">
      <div className="log-out-page-container">
      <title>Logget ut av LagAlt</title>
      <h1 className="log-out-page-tile">Du har blitt logget ut</h1>
      <p className="log-out-page-paragraph">Takk for at du brukte vår tjeneste</p>
      <Link className="log-out-page-link" to="/">Ta meg til forsiden</Link>
    </div>
    </div>
    
  );
};
export default LoggUt;
