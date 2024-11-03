import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { id: 1, logo: '/img/javaScript.png', name: 'JavaScript' },
  { id: 2, logo: '/img/react.png', name: 'React' },
  { id: 3, logo: '/img/Tailwind-CSS.svg', name: 'Tailwind CSS' },
  { id: 4, logo: '/img/Java.png', name: 'Java' },
  { id: 5, logo: '/img/Spring_Boot.svg', name: 'Spring Boot' },
  { id: 6, logo: '/img/mysql.png', name: 'MySQL' },
  { id: 7, logo: '/img/postman.png', name: 'PostMan' },
  { id: 8, logo: '/img/docker.svg', name: 'Docker' },
];

const Tech = () => {
  return (
    <>
    <div id='tech' className='flex flex-col w-full md:w-[66vw]'>
    <h2 className='text-gray-200 flex text-3xl lg:text-5xl mb-5 justify-left ml-2 md:justify-center'>Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-6 p-2 md:gap-5 lg:gap-10 lg:p-4 justify-center">
        {skills.map(skill => (
          <motion.div
            key={skill.id}
            className="flex flex-col text-gray-500 text-xs md:text-sm items-center justify-center py-4 px-4 lg:py-6 border border-gray-700 rounded hover:brightness-110 hover:text-white shadow-md hover:border-gray-200"
            whileHover={{ scale: 1.02, y: -5 }} // Only parent hover effect
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-24 h-24 md:w-32 md:h-32  "
            />
            <div className="mt-3">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Tech;


