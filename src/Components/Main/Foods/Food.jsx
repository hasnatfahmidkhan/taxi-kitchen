const Food = ({ food }) => {
  return (
    <div className="p-5 bg-white flex gap-3 shadow rounded-xl">
      <div className="img flex-1">
        <img
          src={food.foodImg}
          alt=""
          className="w-[160px] rounded-xl h-[160px] object-cover"
        />
      </div>
      <div className="flex-2">
        <h1 className="text-xl font-bold">{food.title}</h1>
        <div className="badge badge-warning">{food.category}</div>
        <div className="divider divider-end">
          <h2 className="text-yellow-600 font-semibold">
            $ <span className="price">{food.price}</span> BDT
          </h2>
        </div>
        <button className="btn btn-warning">
          <i className="fa-solid fa-square-plus" />
          Add This Item
        </button>
      </div>
    </div>
  );
};

export default Food;
