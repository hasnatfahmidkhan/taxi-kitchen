import { useState } from "react";
import "./category.css";
const Category = ({ category, handleFoodPromise }) => {
  const [activeStatus, setActiveStatus] = useState(false);
  const handleActiveStatus = () => {
    setActiveStatus(!activeStatus);
    handleFoodPromise(category.id);
  };
  return (
    <>
      <button
        onClick={() => handleActiveStatus()}
        id={category.id}
        className={`hover:bg-[#1e88e5] hover:text-white btn btn-block shadow btn-category inline-flex items-center justify-start ${
          activeStatus && "active"
        }`}
      >
        <img src={category.categoryImg} alt="" className="w-10" />
        {category.categoryName}
      </button>
    </>
  );
};

export default Category;
