import React, { useEffect, useState } from "react";
import DocumentTitle from "../../components/DocumentTitle";
import { child, get, getDatabase, ref } from "firebase/database";
import css from "./Favorites.module.css";
import TeacherCardDetails from "../../components/TeacherCardDetails/TeacherCardDetails";
import { useAuth } from "../../context/auth-context";
import { ApiProp } from "../../types/indexTypes";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Favorites = () => {
  const [teachers, setTeachers] = useState<ApiProp>([]);
  const { user } = useAuth();
  const userId = user?.uid;

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `/users/${userId}/favorites/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setTeachers(Object.values(snapshot.val()));
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [userId]);

  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      <section className='container'>
        <ul className={css.list}>
          {teachers.length > 0 ? (
            teachers.map((teacher, idx) => (
              <li className={css.item} key={idx}>
                <TeacherCardDetails teacher={teacher} />
              </li>
            ))
          ) : (
            <>
              <p className={css.alternativeText}>
                Your favorites list is empty. Start exploring and add some items
                to your favorites!{" "}
                <Link className={css.link} to='/teachers'>
                  Click here
                </Link>
              </p>
            </>
          )}
        </ul>
      </section>
    </>
  );
};

export default Favorites;
