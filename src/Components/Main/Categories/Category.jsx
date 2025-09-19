import React from "react";

const Category = ({ category }) => {
  return (
    <>
      <button className="btn btn-block shadow btn-category inline-flex items-center justify-start">
        <img src={category.categoryImg} alt="" className="w-10" />
        {category.categoryName}
      </button>
    </>
  );
};

export default Category;
