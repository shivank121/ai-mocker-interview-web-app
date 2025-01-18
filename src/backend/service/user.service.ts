import UserModel from "../model/User.model";
import bcrypt from "bcryptjs";

import { apiResponseInterface } from "../interface/apiResponseInterface";
import { sendVerificationEmail } from "../utils/sendVerificationEmail";

import { emailSuccessMsg } from "../utils/msg/userMsg";
import { emailFailMsg } from "../utils/msg/userMsg";
import { registerNewUser } from "../utils/msg/userMsg";


interface Data {
  username: string;
}

interface Data {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

// 🔢 Generate a 6-digit verification code
const generateVerificationCode = () => Math.floor(100000 + Math.random() * 900000).toString();

// 📧 Helper function to send the verification email
const sendVerification = async (
  email: string,
  username: string,
  verifyCode: string
): Promise<apiResponseInterface> => {

  try {

    await sendVerificationEmail(email, username, verifyCode);
    
    // Successfully verification code send
    return {
      success: emailSuccessMsg.success,
      statusCode: emailSuccessMsg.statusCode,
      message: `${emailSuccessMsg.message} to ${email}`,
      data: {},
    };
    
  } catch (error) {
    return {
      success: emailFailMsg.success,
      statusCode: emailFailMsg.statusCode,
      message: `${emailFailMsg.message} to ${email}`,
      data: {},
    };
  }
};


// 🚀 User Registration Service
export const registerUserService = async ( data: Data): Promise<apiResponseInterface> => {

  const { firstName, lastName, username, email, password } = data;

  const saltRounds = 10;
  const verifyCode = generateVerificationCode(); // 🔑 Generate verification code
  const hashedPassword = await bcrypt.hash(password, saltRounds); // 🔐 Hash the password
  const expiryDate = new Date(Date.now() + 3600000); // ⏳ Set verification code expiry (1 hour)

  try {
    // 🔎 Check if user already exists with the same username (verified) or email
    const existingUser = await UserModel.findOne({
      $or: [{ $and: [{ username }, { isVerified: true }] }, { email }],
    });


    if (existingUser) {

      // ⚠️ Username or Email already exists and is verified
      if (existingUser.isVerified) {

        const message = existingUser.username === username
          ? "⚠️ Username is already taken."
          : "⚠️ Email is already registered.";

        return { statusCode: 400, message, data: existingUser };
      }

      // 🔄 User exists but is not verified - update verification details
      existingUser.verifyCode = verifyCode;
      existingUser.verifyExpiry = expiryDate;

      await existingUser.save();

      return await sendVerification(email, username, verifyCode);
    }

    // 🆕 Create a new user if no existing user is found
    const newUser = new UserModel({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      verifyCode,
      verifyExpiry: expiryDate,
    });

    await newUser.save(); // 💾 Save the new user

    const verificationCodSendRes = await sendVerification(email, username, verifyCode);

    return {
      statusCode: registerNewUser.statusCode,
      message: `${registerNewUser.message}. ${verificationCodSendRes.message} ${email} `,
      data: newUser,
    }

  } catch (error: any) {
    console.error("❗ Error in registerUserService :- ", error.message);
    return { statusCode: 500, message: error.message, data: [] };
  }
};

// 🚀 Check unique username Service
export const checkUniqueUsernameService = async (data: Data) => {

  const { username } = data;

  // 🚀 Check if a user with the same username (and verified) already exists
  const isUsernameExist = await UserModel.findOne({$and: [{username}, {isVerified: true}]});


  if (isUsernameExist) {
    return {
      statusCode: 400,
      success: false,
      message: "username was already taken",
      data: {},
    }
  }

  return {
    statusCode: 200,
    success: true,
    message: "username is unique",
    data: isUsernameExist,
  }

}

// 🚀 Login Service
export const loginService = async (data: LoginData): Promise<apiResponseInterface> => {

  const { email, password } = data;

  try {
    // 🚀 Check if a user with the same email already exists
    const isExistByEmail = await UserModel.findOne({email});
  
    if(isExistByEmail){
      const storedPassword = isExistByEmail?.password || "";
      const isCorrectPassword =  await bcrypt.compare(password, storedPassword);

      if(isCorrectPassword){
        return {
          statusCode: 200,
          success: true,
          message: "Login successfully",
          data: {},
        }
      }

      return {
        statusCode: 400,
        success: false,
        message: "❌ Oops! Invalid password. Please try again.",
        data: {},
      }
    }

    return {
      statusCode: 400,
      success: false,
      message: "❌ Oops! Invalid email.",
      data: {},
    }

  } catch (error: any) {

    console.error("❗ Error in registerUserService :- ", error.message);
    return { statusCode: 500, message: error.message, data: {} };
  }

}
