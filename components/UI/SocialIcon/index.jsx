import Link from "next/link";
import React from "react";

const SocialIcon = ({ icon, route, anchor }) => {
  return (
    <React.Fragment>
      {anchor ? (
        <Link href={route}>
          <div className='w-10 rounded-xl bg-red-800   text-black shadow-lg  p-6 cursor-pointer  h-5'>
            {icon}
          </div>
        </Link>
      ) : (
        <a href={route} target='_blank' rel='noreferrer'>
          <div className=' w-10 items-center rounded bg-white sh p-6 cursor-pointer '>
            {icon}
          </div>
        </a>
      )}
    </React.Fragment>
  );
};
export default SocialIcon;
