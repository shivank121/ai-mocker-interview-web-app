import React from "react";
import { useState } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Register = () => {

  const handleChange = (e:any) => {
    // setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic
  };



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

        {/* <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            // value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            // value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            // value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            // value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            // value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full">Register</Button>
      </form>
    </div> */}
      </section>


    </>
  );
};

export default Register;
