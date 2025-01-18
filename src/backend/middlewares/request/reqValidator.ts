import { ZodSchema } from "zod";
import { sendResponse } from "../response/sendResponse";
import { NextRequest, NextResponse } from "next/server";


export async function validationMiddleware(schema: ZodSchema,req: NextRequest, res: NextResponse,) {
    
    const method = req.method.toUpperCase();
    let data: any;

    if (method === "GET" || method === "DELETE") {
        const url = await new URL(req.url);

        data = await Object.fromEntries(url.searchParams); // Parse query parameters

    } else if (["POST", "PUT", "PATCH"].includes(method)) {
        data = await req.json(); // Parse JSON body
    }


    try {
        // Validate the data using the Zod schema
        const validatedData = schema.safeParse(data);

        // Check if validation failed
        if (!validatedData.success) {
            const errorMessages = validatedData.error.errors.map((err) => err.message).join(", ");

            // Send a response with the validation errors
            return {
                success: validatedData.success, 
                message: errorMessages,
            };
        }

        // If validation is successful, return the validated data
        return validatedData.data;


    } catch (error: any) {

        const errorMessage: string = error.message || "invalid data structure"
        sendResponse(406, errorMessage, null)
        throw error;
    }

}
