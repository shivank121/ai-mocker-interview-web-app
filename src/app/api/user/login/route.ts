import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db-connection";

import { logInValidationSchema } from "@/backend/validation/user/logInSchema";
import { validationMiddleware } from "@/backend/middlewares/request/reqValidator";
import { sendResponse } from "@/backend/middlewares/response/sendResponse";
import { loginService } from "@/backend/service/user.service";

export async function POST(req: NextRequest, res: NextResponse) {
  
  // Connecting to the database
  await dbConnect();

  try {

    // Validate the request body using the zod schema
    const validatedData = await validationMiddleware(logInValidationSchema, req, res);

    // 🛑 Return if validation fails
    if(validatedData.success === false) return sendResponse(422, validatedData.message, null); 

    // 📦 Extract validate data
    const {email, password} = validatedData;

    // 🚀 Login user
    const result = await loginService({email, password});

    // ✅ Send success response
    return await sendResponse(result.statusCode, result.message, result.data)

  } catch (error: any) {
    console.error("❌ Error in login route: ", error.message);

    const errorMessage = error?.message || "An unexpected error occurred";
    return sendResponse(500, errorMessage, {});
  }
}
