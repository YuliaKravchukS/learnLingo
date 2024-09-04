import DocumentTitle from "../../components/DocumentTitle";
// import FilterBar from "../../components/FilterBar/FilterBar";
import TeachersList from "../../components/TeachersList/TeachersList";

const Teachers = () => {
  return (
    <>
      <DocumentTitle>Teachers</DocumentTitle>
      <section className='container'>
        {/* <FilterBar /> */}
        <TeachersList />
      </section>
    </>
  );
};

export default Teachers;
