import { Document } from "mongoose";

export interface apiResponseInterface {
  statusCode?: number;
  success?: boolean;
  message: string;
  data?: Record<string, unknown> | Record<string, unknown>[] | Document | Document[] | null;
}



/**
 * Note:- data can now accept:
 * 
 * 1- Record<string, unknown> (an object with key-value pairs)
 * 2- Array<Record<string, unknown>> (an array of objects)
 * 3- null (to explicitly state there's no data)
 */

