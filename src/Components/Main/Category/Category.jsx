const Category = ({ category, handleActiveStatus, activeStatus }) => {
  return (
    <>
      <button
        onClick={() => {
          handleActiveStatus(category.id);
        }}
        id={category.id}
        className={`hover:bg-black hover:text-white btn btn-block shadow btn-category inline-flex items-center justify-start ${
          activeStatus === category.id && "bg-black text-white"
        }`}
      >
        <img src={category.categoryImg} alt="" className="w-10" />
        {category.categoryName}
      </button>
    </>
  );
};

export default Category;
