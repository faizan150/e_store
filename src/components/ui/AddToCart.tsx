'use client'


import { Button } from "./button"
import { useDispatch } from "react-redux"
import { toast } from "react-hot-toast"
import { counterActions } from "@/store/slice/cartSlice"


const AddToCart = () => {

  const dispatch = useDispatch();
  const addItem = () => {
      dispatch(counterActions.addToCart({ quantity: 1}));
      toast.success("Product Added")
  };

return (
  <Button onClick={addItem} className="bg-gray-800 rounded-xl text-white hover:bg-gray-400 hover:text-black">
      Add To Cart
  </Button>
)
}

export default AddToCart