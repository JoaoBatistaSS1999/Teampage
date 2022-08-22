import React from "react";

const ProjectCard = () => {
  return (
    <div className='flex justify-center'>
      <div className='rounded-lg shadow-lg bg-[#ffffff] max-w-sm h-auto  '>
        <a href='#!' data-mdb-ripple='true' data-mdb-ripple-color='light'>
          <img
            className='rounded-t-lg'
            src='https://mdbootstrap.com/img/new/standard/nature/182.jpg'
            alt='/'
          />
        </a>
        <div className='p-6 '>
          <h5 className='text-gray-900 text-xl font-medium mb-2'>Card title</h5>
          <p className='text-gray-700  text-justify mb-4 max-h-20 overflow-clip  break-words'>
            Some quick example text to build on the card title and make up the
            bulk of the cards content. Some quick example text to build on the
            Some quick example text to build on the card title and make up the
            bulk of the cards content. Some quick example text to build on the
            Some quick example text to build on the card title and make up the
            bulk of the cards content. Some quick example text to build on the
          </p>
          <div className='flex items-start'>
            <button
              type='button'
              className='mr-3 h-10 px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#141414]   focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-in-out'>
              Info
            </button>
            <button
              type='button'
              className='h-10 px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#141414]   focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-in-out'>
              Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
