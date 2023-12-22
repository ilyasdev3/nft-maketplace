export interface IRoutes {
  path: string;
  element: React.ComponentType<any>;
  children?: IRoutes[];
  exact?: boolean;
  index?: number;
  type?: "private" | "public" | "admin" | "auth" | null;
}

export enum Routes {
  HOME = "/",
  PROFILE = "/profile",
  EXPLORE = "/explore",
  LOGIN = "/login",
  REGISTER = "/register",
  CREATENFT = "/create-nft",
  NFT = "/nft/:id",
  DASHBOARD = "/dashboard",
  ADMIN = "/admin",
  NOT_FOUND = "/404",
}
