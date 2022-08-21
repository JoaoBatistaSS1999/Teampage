import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "./UI/SocialIcon";

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center bg-[#18191b]'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-[#ffffff]'>
            <span className='text-[#c92a94]'> Materializing</span> ideas,
          </h1>
          <h1 className='py-2 text-[#ffffff]'>
            Bringing projects to <span className='text-[#c92a94]'> life</span>
          </h1>
          <p className='py-4 text-[#ffffff] sm:max-w-[70%] m-auto'>
            We focus on building fast, responsive and intuitive web3 aplications
            with a high level of customizability
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
