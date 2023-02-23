import React from "react";
import "./contactus.css";
import { BsChevronDoubleDown,BsPhoneVibrate,BsVoicemail } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-contact">
        <div className="bg-color flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <BsChevronDoubleDown className="text-5xl mt-5 text-white" />
        </div>
      </div>
      <div className="lg:flex justify-between lg:p-20 p-10 text-red-600">
        <div className="flex items-center justify-center text-2xl">
        <BsPhoneVibrate className="mr-2"></BsPhoneVibrate><p>+882102452215</p>
        </div>
        <div className="flex items-center justify-center text-2xl">
        <BsPhoneVibrate className="mr-2"></BsPhoneVibrate><p>nahidasif1998@gmail.com</p>
        </div>
        <div className="flex items-center justify-center text-2xl">
        <BsVoicemail className="mr-2"></BsVoicemail><p>nahidasif1998@gmail.com</p>
        </div>
      </div>
      <div>
        <form
          action=""
          className="flex flex-col justify-center items-center lg:p-20 px-10"
        >
          <input
            type="text"
            className="md:w-[500px] w-full border-2 p-3 rounded-md"
            placeholder="Eneter Your Name"
          />
          <input
            type="text"
            className="md:w-[500px] w-full border-2 my-5 p-3 rounded-md"
            placeholder="Eneter Your Email"
          />
          <textarea className="md:w-[500px] w-full border-2 rounded-md p-3"></textarea>
          <button className="bg-slate-800 text-white md:w-[500px] w-full mt-5 py-3 rounded-md text-lg font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
