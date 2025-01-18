import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/lib/db-connection";

import { checkUniqueUserNameValidationSchema } from "@/backend/validation/user/checkUniqueUserName";
import { checkUniqueUsernameService } from "@/backend/service/user.service"; 
import { sendResponse } from "@/backend/middlewares/response/sendResponse";
import { validationMiddleware } from "@/backend/middlewares/request/reqValidator";


export async function GET(req: NextRequest, res: NextResponse){
    
    await dbConnect();  // DB Connection

    try {
        
        // Validate the request query using the Zod schema
       const validatedData = await validationMiddleware(checkUniqueUserNameValidationSchema, req, res);

       // 🛑 Return if validation fails
       if(validatedData.success === false) return sendResponse(422, validatedData.message, null); 
       
        // 📦 Extract valid data
        const {username} = validatedData;

        // 🚀 check unique username 
        const result = await checkUniqueUsernameService(username)

        // ✅ Send success response
        return sendResponse(result.statusCode, result.message, result.data);

    } catch (error: any) {
        console.log("Error in checking unique username", error.message)

        const errorMessage = error?.message || "An unexpected error occurred";
        sendResponse(500, errorMessage, {});
    }
}

