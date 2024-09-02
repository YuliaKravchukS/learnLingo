import { createContext, useContext, useEffect, useState } from "react";
import {
  IAuth,
  LoginFormValues,
  Props,
  UserFormValues,
} from "../types/indexTypes";
import { firebaseAuth } from "../firebase/firebase-config";
import { onAuthStateChanged, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import {
  firebaseSignIn,
  firebaseSignOut,
  firebaseSignUp,
} from "../firebase/firebase";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext<IAuth>({
  user: firebaseAuth.currentUser,
  loading: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const signIn = async (creds: LoginFormValues) => {
    setIsLoading(true);
    await firebaseSignIn(creds)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        navigate("/teachers", { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        <Toaster
          position='bottom-left'
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            error: {
              duration: 3000,
            },
          }}
        />;

        setIsLoading(false);
      });
  };
  const signUp = async (creds: UserFormValues) => {
    setIsLoading(true);
    await firebaseSignUp(creds)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user: ", user);
        setCurrentUser(user);
        navigate("/teachers");
      })
      .catch((error) => {
        toast.error(error.message);
        <Toaster
          position='bottom-left'
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            error: {
              duration: 3000,
            },
          }}
        />;

        setIsLoading(false);
      });
  };
  const signOut = async () => {
    setIsLoading(true);
    await firebaseSignOut()
      .then(() => {
        setCurrentUser(null);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  const value: IAuth = {
    user: currentUser,
    loading: isLoading,
    signIn,
    signUp,
    signOut,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  if (isAuthLoading) return <Home />;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
