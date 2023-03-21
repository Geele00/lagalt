import { AuthState, INavItem } from "./Nav.types";

export const navItems: INavItem[] = [
  {
    title: "Forsiden",
    to: "/",
  },
  {
    title: "Nytt prosjekt",
    to: "/$username/nytt-prosjekt",
    condition: AuthState.loggedIn,
    params: {
      username: true,
    },
  },
  {
    title: "Min side",
    to: "/$username",
    condition: AuthState.loggedIn,
    params: {
      username: true,
    },
  },
  {
    title: "Hjelp",
    to: "/hjelp",
  },
  {
    title: "Ny bruker",
    to: "/ny-bruker",
    condition: AuthState.loggedOut,
  },
  {
    title: "Logg inn",
    to: "/logg-inn",
    condition: AuthState.loggedOut,
  },
  {
    title: "Logg ut",
    to: "/logg-ut",
    condition: AuthState.loggedIn,
  },
];
