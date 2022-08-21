import Link from "next/link";
import React from "react";

const SocialIcon = ({ icon, route, anchor }) => {
  return (
    <React.Fragment>
      {anchor ? (
        <a href={route} target='_blank' rel='noreferrer'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            {icon}
          </div>
        </a>
      ) : (
        <Link href={route}>
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            {icon}
          </div>
        </Link>
      )}
    </React.Fragment>
  );
};
export default SocialIcon;
