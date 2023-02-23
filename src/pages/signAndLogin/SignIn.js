import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignIn = () => {

  const {signin} = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"
  const navigate = useNavigate();
  const handleLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value

    signin(email,password).then(result => {
      const user = result.user;
      console.log(user);
    }).then(()=>{
      toast.success("login successfull")
      navigate(from, {replace: true})
    }).catch(err => console.log(err.message))

  }
  return (
    <div>
      <div className="max-w-7xl mx-auto flex justify-center h-[430px] items-center">
      <form onSubmit={handleLogin}>
            <h1 className="text-3xl mb-8 font-semibold">Signin to your account</h1>
          <input
            className="border-2 border-[#000DFF] w-full md:w-[500px] p-3"
            type="email"
            placeholder="Enter Your Email"
            name="email"
          />{" "}
          <br />
          <input
            className="border-2 w-full md:w-[500px] border-[#000DFF] p-3 my-10"
            type="password"
            placeholder="Enter Your Password"
            name="password"
          />
          <div>
            <button className="bg-[#000DFF] w-full md:w-[500px] py-3 text-white text-lg font-semibold">
              Signin
            </button>
          </div>
          <div className="mt-3 text-lg">
          New at Job portal? <Link to='/signup' className="text-orange-500">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
