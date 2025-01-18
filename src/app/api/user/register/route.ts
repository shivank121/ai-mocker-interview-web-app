import { NextRequest, NextResponse } from "next/server";

import { registerValidationSchema } from "@/backend/validation/user/registerSchema";
import { validationMiddleware } from "@/backend/middlewares/request/reqValidator";
import { sendResponse } from "@/backend/middlewares/response/sendResponse";
import { registerUserService } from "@/backend/service/user.service";
import { apiResponseInterface } from "@/backend/interface/apiResponseInterface";
import dbConnect from "@/lib/db-connection";


export async function POST(req: NextRequest, res: NextResponse) {

  // Connecting to the database
  await dbConnect();

  try {
    // Validate the request body using the Zod schema
    const validatedData = await validationMiddleware(registerValidationSchema, req, res);
    
    // 🛑 Return if validation fails
    if(validatedData.success === false) return sendResponse(422, validatedData.message, null); 

    // 📦 Extract valid data
    const { username, firstName, lastName, email, password } = validatedData;

    // 🚀 Register user
    const result: apiResponseInterface = await registerUserService({ firstName, lastName, username, email, password });

      
    // ✅ Send success response
    return sendResponse(result.statusCode, result.message, result.data);


  } catch (error: any) {

    console.error("❌ Error in register route: ", error.message);

    const errorMessage = error?.message || "An unexpected error occurred";
    return sendResponse(500, errorMessage, {});
  }
}
