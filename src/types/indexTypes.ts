import { User } from "firebase/auth";
import { ReactNode } from "react";

export interface Props {
  children?: ReactNode;
}

export interface BtnProp {
  className?: string;
  type: "submit" | "reset" | "button";
  text: string;
  cb: (text: string) => void;
}

export interface FormProp {
  state: boolean;
  closeModal: () => void;
}

export interface UserFormValues {
  email: string;
  password: string;
  displayName: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface IAuth {
  user: User | null;
  loading: boolean;
  signIn: (creds: LoginFormValues) => void;
  signUp: (creds: UserFormValues) => void;
  signOut: () => void;
}
