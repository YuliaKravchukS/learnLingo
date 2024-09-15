import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { ApiProp, TeachersListProp } from "../../types/indexTypes";
import TeacherCardDetails from "../TeacherCardDetails/TeacherCardDetails";
import Button from "../../ui/Button/Button";
import css from "./TeachersList.module.css";

const TeachersList: React.FC<TeachersListProp> = ({ filters }) => {
  const { db } = useAuth();
  const [teachers, setTeachers] = useState<ApiProp>([]);

  const [lastVisibleKey, setLastVisibleKey] = useState<string | null>(null);
  const { language, levels, price } = filters;

  useEffect(() => {
    const fetchTeachers = async () => {
      const data = await db();
      setTeachers(data);
      setLastVisibleKey(data[data.length - 1].id);
    };
    fetchTeachers();
  }, [db]);

  useEffect(() => {
    const filteredData = teachers
      .filter((teacher) => teacher.languages?.includes(language))
      .filter((teacher) => teacher.levels?.includes(levels))
      .filter((teacher) => teacher.price_per_hour === Number(price));

    if (filteredData.length > 0) {
      setTeachers(filteredData);
      setLastVisibleKey(filteredData[filteredData.length - 1].id);
    }
  }, [teachers, language, levels, price]);

  const loadMoreTeachers = async () => {
    if (lastVisibleKey) {
      const dataMore = await db(lastVisibleKey);
      const updateTeachers = [...teachers, ...dataMore];
      setTeachers(updateTeachers);
      setLastVisibleKey(updateTeachers[updateTeachers.length - 1].id);
    }
  };

  return (
    <div className={css.TeachersList}>
      <ul className={css.list}>
        {teachers.length > 0 &&
          teachers.map((teacher, idx) => (
            <li className={css.item} key={idx}>
              <TeacherCardDetails teacher={teacher} />
            </li>
          ))}
      </ul>
      {teachers.length > 0 && (
        <Button
          className='loadMore'
          type='button'
          text='Load more'
          cb={loadMoreTeachers}
        />
      )}
    </div>
  );
};

export default TeachersList;
