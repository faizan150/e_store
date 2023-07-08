"use client";

import { useState } from "react";


const Quantity = () => {
  const [num,setNum] = useState(1)



  return (
    <div className="flex items-center gap-x-2 ">
      {/* - */}
      <button className="border  w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center" onClick={()=> {
        setNum(num <=1 ? 1 : num - 1)
      }}>
        -
      </button>
      {/* number  */}
      <div>
        <span className="text-sm">{num}</span>
      </div>

      <button
        className="border  w-6 bg-gray-300 h-6 rounded-full flex justify-center items-center"
        onClick={() => {
            setNum(num + 1)
        }}
      >
        +
      </button>

    </div>
  );
};

export default Quantity;

// export const operationButton = () => {
//   return (
//     <div className="border w-6 h-6 rounded-full flex justify-center items-center">
//       -
//     </div>
//   );
// };
