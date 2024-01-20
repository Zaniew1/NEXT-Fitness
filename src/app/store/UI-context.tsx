'use client'
import React, { useState } from "react";
import {UIContextType, appLangugeType, ContextPropsType} from '../types/types'
export const UIContext = React.createContext<UIContextType>({
  drop: true,
  setDropDownNav: (drop: boolean) => {},
  appLanguage: "pol",
  setAppLanguage: () => {},
});

export const UIContextProvider = (props: ContextPropsType) => {
  const [dropDownNav, setDropDownNav] = useState<boolean>(true);
  const [appLanguage, setAppLanguage] = useState<appLangugeType>("pol");

  return (
    <UIContext.Provider
      value={{ 
        appLanguage,
        setAppLanguage,
        drop: dropDownNav,
        setDropDownNav: setDropDownNav,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};
