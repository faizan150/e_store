'use client'


import { Button } from "./button"
import { useDispatch } from "react-redux"
import { counterActions } from "@/store/slice/cartSlice"


const AddToCart = () => {
    const dispatch = useDispatch()
    const additem = ()=>{
        dispatch(counterActions.addToCart({quantity:1}))
    }
  return (
    <Button className="bg-gray-500  text-white rounded" onClick={AddToCart}>Add To Cart</Button>
  )
}

export default AddToCart