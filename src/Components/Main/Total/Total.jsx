const Total = ({ totolPrice }) => {
  return (
    <div className="bg-[#FEBF00] mt-5 rounded">
      <h2 className="p-3 text-white font-bold">
        Total $ <span>{totolPrice}</span> BDT
      </h2>
    </div>
  );
};

export default Total;
