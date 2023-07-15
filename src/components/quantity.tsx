'use client'
import React, { useState } from "react";

const Quantity = (params: { price: number; id: number }) => {
  const [num, setNum] = useState(1);

  const HandleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: params.id,
        quantity: num,
      }),
    });
    const result = await res.json();
    // Handle the server response here, e.g., show success message or error.
  };

  const handleDecrease = () => {
    setNum((prevNum) => (prevNum <= 1 ? 1 : prevNum - 1));
  };

  const handleIncrease = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const productPrice = params.price * num;

  return (
    <div>
      <div className="flex items-center gap-x-2">
        Quantity:
        {/* - */}
        <button
          className="border w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center"
          onClick={handleDecrease}
        >
          -
        </button>
        {/* number  */}
        <div>
          <span className="text-sm">{num}</span>
        </div>
        <button
          className="border w-6 bg-gray-300 h-6 rounded-full flex justify-center items-center"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <div className="mt-5 flex gap-x-4 items-center justify-center">
        <button
          className="border bg-blue-500 text-white rounded px-3 py-2"
          onClick={HandleAddToCart}
        >
          Add To Cart
        </button>
        <h2 className="text-2xl font-bold">${productPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Quantity;
