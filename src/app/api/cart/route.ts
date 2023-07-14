import { NextRequest, NextResponse } from "next/server";

import { v4 as uuid } from "uuid";
import { db, cartTable } from "@/lib/drizzle";
import { cookies } from "next/dist/client/components/headers";

export const GET = async (request: NextRequest) => {

  
  try {
    const res = await db.select().from(cartTable);
    console.log(res,'here');
    
    return NextResponse.json(res);
  } catch (error) {     
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};



export const POST = async (request: NextRequest) => {



    const req = await request.json()

    
    const setCookies = cookies();
    const uid = uuid()

    const setid = setCookies.set('user_id', uid)

    const userId = cookies().get('user_id')

    if (!userId) {
        setCookies.set('user_id', uid)
    }
    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: 1,
            user_id: cookies().get('user_id')?.value as string
        });
        return NextResponse.json({ res })
    } catch (error) {

    }
}
