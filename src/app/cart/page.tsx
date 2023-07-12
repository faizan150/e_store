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
}  


const cart = () => {
    const result = getAddToCartProducts()
    console.log(result);
    

    
  return (
    <>

    </>
  )
}


export default cart