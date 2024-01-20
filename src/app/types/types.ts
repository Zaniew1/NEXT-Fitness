export type ContextPropsType = {
  children: React.ReactNode;
};
export type UIContextType = {
  drop: boolean;
  setDropDownNav: (drop: boolean) => void;
  appLanguage: appLangugeType;
  setAppLanguage: (appLanguage: appLangugeType) => void;
};
export type appLangugeType = "pol" | "eng";
export type NavLinksType = {
  data: {
    pol: { name: string; link: string }[];
    eng: { name: string; link: string }[];
  };
};
