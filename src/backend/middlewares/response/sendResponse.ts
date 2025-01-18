import { NextResponse } from "next/server";
import customMessage from "./msg";

export function sendResponse(
  statusCode: number | undefined,
  message?: string,
  data: any = null
): NextResponse {

  try {
    
    const result: any = {};
    const n_code: number = statusCode ? statusCode : 455;
    const m = customMessage[n_code];

    result.success = m ? m.status : false;
    result.message = message || (m ? m.message : "Unknown status code");
    result.data = data || {};

    // Return a NextResponse object with the status code and the result in JSON format
    return NextResponse.json(result, { status: m ? m.httpCode : 455 });

  } catch (error: unknown) {

    return NextResponse.json(
      {
        success: false,
        message: `Failure while processing response: ${(error as Error).message}`,
      },
      { status: 406 }
    );
  }
}
