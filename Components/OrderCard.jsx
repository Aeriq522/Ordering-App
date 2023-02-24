import React, { useState } from "react";

const OrderCard = () => {
  const [selected, setSelected] = useState(false);

    //console.log(selected)

  return (
    <>
      <div className="flex items-center border-2 justify-evenly">
        <h3 className="text-3xl font-semibold pr-6">PON# : JT15985N-1489</h3>
        <button
          onClick={() => setSelected(!selected)}
          className="text-red-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          Details
        </button>
      </div>
    </>
  );
};

export default OrderCard;
