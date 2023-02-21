import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
      <div className="max-w-7xl mx-auto flex justify-center items-center my-5">
        <div>
            <h1 className="text-3xl mb-8 font-semibold">Create an account</h1>
          <input
            className="border-2 border-[#000DFF] w-[500px] p-3"
            type="text"
            placeholder="Enter Your Full Name"
          />{" "}
          <br />
          <input
            className="border-2 w-[500px] border-[#000DFF] p-3 my-10"
            type="Email"
            placeholder="Enter Your Email"
          />
          <br />
          <input
            className="border-2 w-[500px] border-[#000DFF] p-3 mb-10"
            type="password"
            placeholder="Enter Your Password"
          />
          <br />
          <select className='mb-10 border-2 p-3 border-[#000DFF] w-[500px] ' name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="female">3rd gender</option>
          </select>
          <div>
            <button className="bg-[#000DFF] w-[500px] py-3 text-white text-lg font-semibold">
              Signup
            </button>
          </div>
          <div className="mt-3 text-lg">
          Allready have an account? <Link to='/signin' className="text-orange-500">Signin</Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;