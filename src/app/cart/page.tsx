'use client'

import { NextRequest, NextResponse } from "next/server";


import { v4 as uuid } from "uuid";
import { db, cartTable } from "@/lib/drizzle";
import { cookies } from "next/dist/client/components/headers";




const getAddToCartProducts = async () => {
    const res = await fetch('/api/cart',{
        method:'GET',
      })
      const result =await res.json()
      console.log(result,'here');
      
}  


const cart = () => {
    const result = getAddToCartProducts()
    // console.log(result);
    

    
  return (
    <>
      <div>
        {/* Display the cart data */}
        <p>Id: {result?.id}</p>
        <p>Product Id: {result?.product_id}</p>
        <p>Quantity: {result?.quantity}</p>
        <p>User Id: {result?.user_id}</p>
      </div>
    </>
  )
}


export default cart