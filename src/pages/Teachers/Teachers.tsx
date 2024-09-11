import { useState } from "react";
import DocumentTitle from "../../components/DocumentTitle";
import FilterBar from "../../components/FilterBar/FilterBar";
import TeachersList from "../../components/TeachersList/TeachersList";

const Teachers = () => {
  const [filters, setFilters] = useState({
    language: "",
    levels: "",
    price: "",
  });

  return (
    <>
      <DocumentTitle>Teachers</DocumentTitle>
      <section className='container'>
        <FilterBar onChangeFilters={setFilters} />
        <TeachersList filters={filters} />
      </section>
    </>
  );
};

export default Teachers;
