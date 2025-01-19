import React from "react";
import { Button } from "../ui/button";

const Register = () => {
  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="assets/images/register/ai-cover"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              {/* <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to AI Interview 🤖
              </h2>
                className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to AI Interview 🤖
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Prepare, practice, and excel with AI-driven insights. Simplify
                your interview prep, boost confidence, and unlock success. Your
                journey to landing your dream role starts here!
              </p>
              <p className="mt-4 leading-relaxed text-white/90">
                Prepare, practice, and excel with AI-driven insights. Simplify
                your interview prep, boost confidence, and unlock success. Your
                journey to landing your dream role starts here!
              </p> */}
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-8 block lg:hidden">
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to AI Interview 🤖
                </h1>

                <p className="mt-2 leading-relaxed text-gray-500">
                  Prepare, practice, and excel with AI-driven insights. Simplify
                  your interview prep, boost confidence, and unlock success.
                  Your journey to landing your dream role starts here!
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Register;
