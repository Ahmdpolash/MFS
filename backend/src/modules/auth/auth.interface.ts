export interface IUser {
  name: string;
  email: string;
  number: string;
  password: string;
  nid: string;
  role: "USER" | "AGENT" | "ADMIN";
  status: "active" | "blocked";
  isDeleted: boolean;
  initialBalance?: number;
}

export interface ILogin {
  email?: string;
  number?: string;
  password: string;
}
