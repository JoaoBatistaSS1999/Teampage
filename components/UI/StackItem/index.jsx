import Image from "next/image";
import React from "react";

const SkillCard = ({ image, title }) => {
  return (
    <div>
      <div
        className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
        key={title}>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className='m-auto'>
            <Image src={image} width='64px' height='64px' alt={title} />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillCard;
