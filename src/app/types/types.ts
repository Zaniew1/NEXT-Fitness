export type ContextPropsType = {
  children: React.ReactNode;
};
export type UIContextType = {
  appLanguage: appLangugeType;
  setAppLanguage: (appLanguage: appLangugeType) => void;
};
export type appLangugeType = "pol" | "eng";
