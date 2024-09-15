import { createContext, useContext, useEffect, useState } from "react";
import {
  ApiProp,
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
import toast from "react-hot-toast";
import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAfter,
} from "firebase/database";

export const AuthContext = createContext<IAuth>({
  user: firebaseAuth.currentUser,
  loading: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
  db: () => Promise.resolve([]),
});

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const signIn = async (creds: LoginFormValues) => {
    setIsLoading(true);
    try {
      const userCredential = await firebaseSignIn(creds);
      const user = userCredential.user;
      setCurrentUser(user);
      navigate("/teachers", { replace: true });
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (creds: UserFormValues) => {
    setIsLoading(true);
    try {
      const userCredential = await firebaseSignUp(creds);
      const user = userCredential.user;
      setCurrentUser(user);
      navigate("/teachers");
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await firebaseSignOut();
      setCurrentUser(null);
      navigate("/", { replace: true });
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const db = async (lastVisibleKey?: string): Promise<ApiProp> => {
    try {
      let queryRef;

      if (lastVisibleKey) {
        queryRef = query(
          ref(getDatabase(), "teachers"),
          orderByKey(),
          startAfter(lastVisibleKey),
          limitToFirst(4)
        );
      } else {
        queryRef = query(
          ref(getDatabase(), "teachers"),
          orderByKey(),
          limitToFirst(4)
        );
      }

      const snapshot = await get(queryRef);
      if (snapshot.exists()) {
        const teachersData = Object.entries(snapshot.val()).map(
          ([key, value]) => ({
            id: key,
            ...(value as object),
          })
        );

        return teachersData;
      } else {
        toast.error("No data available");
        return [];
      }
    } catch {
      toast.error("Failed to fetch data");
      return [];
    }
  };

  const value: IAuth = {
    user: currentUser,
    loading: isLoading,
    signIn,
    signUp,
    signOut,
    db,
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
