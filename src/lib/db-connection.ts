import mongoose from "mongoose";
import { mongoose_db_uri } from "@/constants/serverSideConst";
import UserModel from "@/backend/model/User.model";


type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  
  if (connection.isConnected) {
    console.log("------------> DB is already connected successfully <-----------");
    return;
  }

  try {
    const db = await mongoose.connect(mongoose_db_uri);
    connection.isConnected = db.connections[0].readyState;
    console.log("-------------------> DB connected successfully <--------------- ");

  } catch (error: any) {
    console.log("DB connection failed ===========> ", error.message);
    process.exit(1);
  }
}

export default dbConnect;
