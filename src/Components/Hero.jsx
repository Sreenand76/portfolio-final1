import React from 'react';
import { TextGenerateEffect } from './ui/Text-GenerationEffect';
import TypeWriterEffect from './ui/TypeWriterEffect';

const Hero = () => {

  return (
    <div id='home' className='pb-20 pt-36 min-h-[60vh] flex items-center'>
      <div className='flex justify-center'>
        <div className='max-w-[89vw] flex flex-col justify-center'> 
          <h1 className='text-gray-400 tracking-widest text-sm md:text-3xl lg:mb-3'>
            Hey, I'm Sreenand S
          </h1>
         
          <TextGenerateEffect
            className="text-base md:text-6xl text-left lg:mb-7"
            words={"An Aspiring Full Stack Developer"}
            duration={1} // Duration for the effect
            filter={false} // Set to false for immediate visibility
          />
          <TypeWriterEffect
            className="break-words whitespace-normal flex flex-wrap mt-3 md:mt-6"
            words={[{ text: "Currently debugging my way through college. . ." }]}
            cursorClassName=""
          />
          <div className='flex justify-start mt-14'>
          <button className='bg-purple-950 text-white text-sm md:text-base p-2 rounded-md lg:h-14 px-3 font-light hover:brightness-110'>Download Resume</button>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;

