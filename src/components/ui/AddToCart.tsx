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
  <Button onClick={addItem}>
      Add To Cart
  </Button>
)
}

export default AddToCart