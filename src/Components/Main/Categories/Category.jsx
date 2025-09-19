const Category = ({ category, handleFoodPromise }) => {
  // const handleFoodPromise = () => {
  //   console.log("object");
  // };
  // handleFoodPromise();
  return (
    <>
      <button
        onClick={() => handleFoodPromise(category.id)}
        id={category.id}
        className="btn btn-block shadow btn-category inline-flex items-center justify-start"
      >
        <img src={category.categoryImg} alt="" className="w-10" />
        {category.categoryName}
      </button>
    </>
  );
};

export default Category;
