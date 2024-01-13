import React, { useState } from "react";
import {UIContextType, appLangugeType, ContextPropsType} from '../types/types'
export const UIContext = React.createContext<UIContextType>({
  appLanguage: "pol",
  setAppLanguage: () => {},
});

export const UIContextProvider = (props: ContextPropsType) => {
  const [appLanguage, setAppLanguage] = useState<appLangugeType>("pol");

  return (
    <UIContext.Provider
      value={{ 
        appLanguage,
        setAppLanguage,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};
