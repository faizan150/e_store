"use client";

import { toast } from 'react-hot-toast';
import React, { useState, useEffect, useMemo } from "react"; // Import statements
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { db, cartTable } from "@/lib/drizzle";
import { cookies } from "next/dist/client/components/headers";
import { products } from "@/utils/mockup";
import Image, { StaticImageData } from "next/image";
import { urlForImage } from "sanity/lib/image";
import getStripePromise from "@/lib/stripe"

interface Product {
  id: number ;
  tagline: string;
  name: string;
  price: number;
  category: string;
  image: StaticImageData | string;
  // Add other properties of the Product type if needed
}

interface DProduct {
  id: number | string;
  product_id: string;
  user_id: string;
  quantity: number;
  // Add other properties of the Product type if needed
}

// const products: Product[] = [
//   // Your products from the mock file
// ];


const handleCheckout = async (productsInCart: any) => {
  
  const response = await fetch('/api/stripe-session/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      cache: 'no-cache',
      body: JSON.stringify({
          productsInCart
      }),
  })

  const stripe = await getStripePromise()

  const data = await response.json()
  console.log(data);
  
  if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id })
      toast.success('Checkout Successfully')
  }
}



const getAddToCartProducts = async () => {
  const res = await fetch("/api/cart", {
    method: "GET",
  });
  const result = await res.json();
  return result as DProduct[]; // Explicitly cast the result as Product[]
};

const Cart = () => {
  const [productsFromDatabase, setProductsFromDatabase] = useState<DProduct[]>(
    []
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const databaseProducts = await getAddToCartProducts(); // Fetch products from the database
      
      setProductsFromDatabase(databaseProducts); // Update the state with database products
    };

    fetchProducts();
  }, []);

  
  
  // Compare the products from the mock file with the ones from the database
  // const productsInCart = products.map((mockProduct) => {
    
  //   const foundProduct = productsFromDatabase.find(
  //     (databaseProduct) => {
  //       // console.log(parseInt(databaseProduct.product_id), mockProduct.id);
  //       return parseInt(databaseProduct.product_id) === mockProduct.id
  //     }
  //   );

  //   // console.log(foundProduct);
    



    
  //   // If the product exists in the database, return the database product, otherwise return the mock product
  //   return foundProduct;
  const productsInCart = useMemo(() => {
    // Ensure both arrays have data
    if (!products || !productsFromDatabase) {
      return [];
    }
  
    // Filter products that have a matching ID in productsFromDatabase
    const filteredProducts = products.filter((product) =>
      productsFromDatabase.some((item) => parseInt(item.product_id) === product.id)
    );
    
    return filteredProducts;
  }, [productsFromDatabase, products]);
  
  
  return (
    <>
      <div>
        <h1 className="text-lg font-extrabold">Shopping Cart</h1>
        {productsInCart.length > 0 ? (
          <div className="flex justify-center">
            <div className="w-2/3">
              {productsInCart.map((product) => {
                const quantity = productsFromDatabase.find((item) => parseInt(item.product_id) === product.id)?.quantity
    return (
      <div
                  key={product.id}
                  className="flex items-center space-x-4 my-4"
                >
                  <div>
                    {typeof product.image === "string" ? (
                      <img src={product.image} alt={product.name} />
                    ) : (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                      />
                    )}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <p>
                      Quantity: {quantity}
                    </p>
                  </div>
                </div>
    )                
})}
            </div>
            <div className="w-1/3">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <div className="bg-gray-100 p-4 rounded">
                <p>Subtotal: $100</p>
                <p>Shipping: $10</p>  
                <p className="text-xl font-bold mt-2">Total: $110</p>
                <button onClick={() =>
                                handleCheckout(
                                    productsInCart.map((product) => ({
                                        quantity:
                                            productsFromDatabase?.find((item) => parseInt(item.product_id) === product.id)?.quantity || 0,
                                        price: product.price || 0,
                                        title: product.name,
                                    }))
                                )
                            } className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded'>Checkout</button>              </div>
            </div>
          </div>
                     ) : (
          <p>No products found in the cart</p>
        )}
      </div>
    </>
  );
};

export default Cart;
