import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto flex justify-center h-[430px] items-center">
        <div>
            <h1 className="text-3xl mb-8 font-semibold">Signin to your account</h1>
          <input
            className="border-2 border-[#000DFF] w-[500px] p-3"
            type="email"
            placeholder="Enter Your Email"
          />{" "}
          <br />
          <input
            className="border-2 w-[500px] border-[#000DFF] p-3 my-10"
            type="password"
            placeholder="Enter Your Password"
          />
          <div>
            <button className="bg-[#000DFF] w-[500px] py-3 text-white text-lg font-semibold">
              Signin
            </button>
          </div>
          <div className="mt-3 text-lg">
          New at Job portal? <Link className="text-orange-500">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
