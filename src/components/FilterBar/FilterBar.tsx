import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FilterBarProp } from "../../types/indexTypes";
import css from "./FilterBar.module.css";

const FilterBar: React.FC<FilterBarProp> = ({ onChangeFilters }) => {
  const { register, watch } = useForm();
  const selectedLanguage = watch("languages");
  const selectedLevels = watch("levels");
  const selectedPrice = watch("price");

  useEffect(() => {
    onChangeFilters({
      language: selectedLanguage || "",
      levels: selectedLevels || "",
      price: selectedPrice || "",
    });
  }, [onChangeFilters, selectedLanguage, selectedLevels, selectedPrice]);

  return (
    <section className='container '>
      <form className={css.form}>
        <label className={css.label} htmlFor='languages'>
          Languages
          <select
            className={css.select}
            {...register("languages", { required: true })}
          >
            <option value='French'>French</option>
            <option value='English'>English</option>
            <option value='German'>German</option>
            <option value='Ukrainian'>Ukrainian</option>
            <option value='Polish'>Polish</option>
          </select>
          <div className={css.selectArrow}></div>
        </label>
        <label className={css.label} htmlFor='level'>
          Level of knowledge
          <select
            className={css.select}
            {...register("levels", { required: true })}
          >
            <option value='A1 Beginner'>A1 Beginner</option>
            <option value='A2 Elementary'>A2 Elementary</option>
            <option value='B1 Intermediate'>B1 Intermediate</option>
            <option value='B2 Upper-Intermediate'>B2 Upper-Intermediate</option>
            <option value='C1 Advanced'>C1 Advancede</option>
            <option value='C2 Proficient'>C2 Proficient</option>
          </select>
        </label>
        <label className={css.label} htmlFor='price'>
          Price
          <select
            className={css.select}
            {...register("price", { required: true })}
          >
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
            <option value='40'>40</option>
          </select>
        </label>
      </form>
    </section>
  );
};

export default FilterBar;
