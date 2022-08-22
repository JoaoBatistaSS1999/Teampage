import Image from "next/image";
import Link from "next/link";
import React from "react";
import Main from "../../components/Main";
import Meta from "../../components/Meta";
import ProjectCard from "../../components/UI/ProjectCard";
import Telegram from "../../public/assets/skills/telegram.png";

const Projects = () => {
  return (
    <div className='max-w-[1920px]'>
      <nav className='fixed w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg'>
        <div className='container-fluid w-full flex flex-wrap items-center justify-between px-6'>
          <div className='container-fluid'>
            <Link href='/'>
              <div className='text-xl text-black cursor-pointer' href='/'>
                Navbar
              </div>
            </Link>
          </div>
        </div>
      </nav>

      <div className='w-full flex gap-4 gap-x-5 justify-center px-3 py-5 sm:py-20 sm:p-10  min-h-screen text-center flex-wrap bg-[#161616]'>
        <Meta title='Projects' />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <div className='rounded-full sm:w-16 sm:h-16 flex justify-center p-2  fixed sm:right-10 sm:bottom-10 bg-black right-3 bottom-3 w-14 h-14'>
          <a
            href='https://hpanel.hostinger.com/'
            target='_blank'
            className='items-center'
            rel='noreferrer'>
            <div className='p-2 h-auto cursor-pointer items-center sm:p-2  flex justify-center text-black'>
              <Image layout='intrinsic' src={Telegram} alt='Avatar' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Projects;
