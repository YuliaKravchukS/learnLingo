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
  db: () => Promise<ApiProp>;
}

export type ApiProp = dataProp[];

export interface dataProp {
  name: string | undefined;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: Review[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
}

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface TeacherCardProp {
  teacher: dataProp;
}
