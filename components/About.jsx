import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div
      id='about'
      className='w-full md:h-screen p-2 flex items-center py-16 bg-[#f5ffff]'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='py-4'>Who we are</h2>
          <p className='py-2 text-gray-600'>
            / / I am not your average developer
          </p>
          <p className='py-2 text-gray-600'>
            I have spent the last 12 years in the fire service working as a
            professional firefighter/paramedic. I have always had a knack for
            technology and working with computers. In 2019 I started working
            with HTML and CSS to make some minor edits on a small business
            website that I was operating. What I thought was just a few small
            edits turned into a love for programming.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>
          {/* <Link href='/#projects'> */}
          {/* <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p> */}
          <button
            type='button'
            className='inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#222] hover:text-[#fff] hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-in-out'>
            Our projects
          </button>
          {/* </Link> */}
        </div>
        <div className='w-full h-auto m-auto  shadow-gray-300 rounded-xl flex items-center justify-center p-4 '>
          <Image src={AboutImg} className='rounded-xl' alt='/team' />
        </div>
      </div>
    </div>
  );
};

export default About;
