import { useRouterContext } from "@tanstack/react-router";
import { createContext, useContext, useMemo, useReducer } from "react";
import { ContextValue, IOverlayProvider } from "./Overlay.Provider.types";
import { overlayReducer } from "./Overlay.reducer";
import { useEffect } from "react";

const OverlayContext = createContext<ContextValue>(null!);

export const OverlayProvider = ({ children }: IOverlayProvider) => {
  const [activeOverlay, toggleOverlay] = useReducer(overlayReducer, null);

  const { state } = useRouterContext();

  useEffect(() => {
    if (state.status === "pending") {
      toggleOverlay({ type: "close", overlay: null });
    }
  }, [state]);

  const contextValue = useMemo(
    () => ({
      activeOverlay,
      toggleOverlay,
    }),
    [activeOverlay]
  );

  return <OverlayContext.Provider value={contextValue} children={children} />;
};

export const useOverlay = () => {
  return useContext(OverlayContext);
};
