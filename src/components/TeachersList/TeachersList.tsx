import React, { useEffect, useState } from "react";
// import TeacherCard from "../TeacherCard/TeacherCard";
import { useAuth } from "../../context/auth-context";
import { ApiProp } from "../../types/indexTypes";
import TeacherCardDetails from "../TeacherCardDetails/TeacherCardDetails";

const TeachersList = () => {
  const { db } = useAuth();
  const [teachers, setTeachers] = useState<ApiProp>([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const data = await db();
      setTeachers(data);
    };

    fetchTeachers();
  }, [db]);

  return (
    <ul>
      {teachers.length > 0 &&
        teachers.map((teacher, idx) => (
          <li key={idx}>
            {/* <TeacherCard teacher={teacher} /> */}
            <TeacherCardDetails teacher={teacher} />
          </li>
        ))}
    </ul>
  );
};

export default TeachersList;
