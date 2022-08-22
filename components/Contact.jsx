import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import ContactImg from "../public/assets/footerLogo.png";
import SocialIcon from "./UI/SocialIcon";
import Telegram from "../public/assets/skills/telegram.png";

const Contact = () => {
  return (
    <div id='contact' className='w-full   lg:h-screen text-white '>
      <div className='max-w-[1240px] m-auto px-2 w-full '>
        <h2 className='py-4'>Get In Touch</h2>
        <div className=' '>
          <div className=' w-full h-full  rounded-xl p-4 flex-col items-center '>
            <div className='w-full bg-red text-center'>
              <Image className='' src={ContactImg} alt='logo' />
            </div>
            <div>
              <h3 className='py-2  text-center'>
                Full stack development company
              </h3>
            </div>
            <div className='text-white items-center'>
              <p className='uppercase pt-8 text-center font-bold'>
                Connect With Us
              </p>
              <div className='h-auto flex-col text-center space-y-10 py-4 text-white'>
                <div className='w-full flex  gap-5 justify-center  items-center'>
                  {/* component */}
                  <a
                    href='https://hpanel.hostinger.com/'
                    target='_blank'
                    rel='noreferrer'>
                    <div className=' h-12 w-12 cursor-pointer mb-4 mx-auto '>
                      <Image layout='intrinsic' src={Telegram} alt='Avatar' />
                    </div>
                  </a>
                  {/* component */}
                </div>
                <p className='border-t-solid-red'>support@bitbrace.tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

{
  // back top top
  /* <div className='flex justify-center py-12 bg-slate-800'>
          <Link href='/'>
            <a>
              <div className='rounded shadow-lg shadow-gray-400 p-4 cursor-pointer ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#ff00ff]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div> */
}

// <div id='contact' className='w-full lg:h-screen'>
//   <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
//     <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
//       Contact
//     </p>
//     <h2 className='py-4'>Get In Touch</h2>
//     <div className='grid lg:grid-cols-5 gap-8 '>
//       <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
//         <div className='lg:p-4 h-full '>
//           <div>
//             <Image className='rounded-xl' src={ContactImg} alt='/' />
//           </div>
//           <div>
//             <h3 className='py-2'> Fullstack development company</h3>
//           </div>
//           <div>
//             <p className='uppercase pt-8'>Connect With Us</p>
//             <div className='flex items-center justify-center gap-5 py-4'>
//               <SocialIcon
//                 icon={<FaLinkedinIn />}
//                 route='https://www.linkedin.com'
//               />
//               <SocialIcon
//                 icon={<FaLinkedinIn />}
//                 route='https://www.linkedin.com'
//               />
//               <SocialIcon
//                 icon={<FaLinkedinIn />}
//                 route='https://www.linkedin.com'
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
