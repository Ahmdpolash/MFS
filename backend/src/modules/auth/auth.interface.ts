export interface IUser {
  name: string;
  email: string;
  number: string;
  password: string;
  nid: string;
  accountType: "USER" | "AGENT";
  initialBalance?: number;
}


export interface ILogin {
   
    email?: string;
    number?: string;
    password: string;
   
  }
  