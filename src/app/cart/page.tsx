"use client";

import React, { useState, useEffect } from "react"; // Import statements
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { db, cartTable } from "@/lib/drizzle";
import { cookies } from "next/dist/client/components/headers";
import { products } from "@/utils/mockup";
import Image, { StaticImageData } from "next/image";
import { urlForImage } from "sanity/lib/image";

interface Product {
  id: number | string;
  tagline: string;
  name: string;
  price: number;
  category: string;
  image: StaticImageData | string;
  // Add other properties of the Product type if needed
}

// const products: Product[] = [
//   // Your products from the mock file
// ];

const getAddToCartProducts = async () => {
  const res = await fetch("/api/cart", {
    method: "GET",
  });
  const result = await res.json();
  return result as Product[]; // Explicitly cast the result as Product[]
};

const Cart = () => {
  const [productsFromDatabase, setProductsFromDatabase] = useState<Product[]>(
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
  const productsInCart = products.map((mockProduct) => {
    const foundProduct = productsFromDatabase.find(
      (databaseProduct) => databaseProduct.id === mockProduct.id
    );

    // If the product exists in the database, return the database product, otherwise return the mock product
    return foundProduct ? foundProduct : mockProduct;
  });

  return (
    <>
      <div>
        <h1 className="text-lg font-extrabold">Shopping Cart</h1>
        {productsInCart.length > 0 ? (
          <div className="flex justify-center">
            <div className="w-2/3">
              {productsInCart.map((product) => (
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
                      Quantity:{" "}
                      {
                        productsFromDatabase?.find(
                          (item) => item.id === product.id
                        )?.name
                      }
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-1/3">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <div className="bg-gray-100 p-4 rounded">
                <p>Subtotal: $100</p>
                <p>Shipping: $10</p>
                <p className="text-xl font-bold mt-2">Total: $110</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded">
                  Checkout
                </button>
              </div>
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
