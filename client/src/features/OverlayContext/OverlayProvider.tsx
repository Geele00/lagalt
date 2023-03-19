import { createContext, useContext, useMemo, useReducer } from "react";
import { ContextValue, IOverlayProvider } from "./OverlayProvider.types";
import { overlayReducer } from "./OverlayReducer";

const OverlayContext = createContext<ContextValue>(null!);

export const OverlayProvider = ({ children }: IOverlayProvider) => {
  const [activeOverlay, toggleOverlay] = useReducer(overlayReducer, null);

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
