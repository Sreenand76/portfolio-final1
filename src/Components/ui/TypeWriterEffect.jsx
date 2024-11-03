"use client";

import { cn } from "../../utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const TypeWriterEffect = ({
  words,
  className,
  cursorClassName
}) => {
  
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split("").map((char) => char === " " ? " " : char), // Maintain spaces
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate("span", {
        display: "inline-block",
        opacity: 1,
        width: "fit-content",
      }, {
        duration: 0.3,
        delay: stagger(0.1),
        ease: "easeInOut",
      });
    }
  }, [isInView]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline-flex items-center flex-wrap">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              initial={{}}
              key={`char-${index}`}
              className={cn(`dark:text-white text-black opacity-0 hidden`, word.className)}>
              {char === " " ? "\u00A0" : char}  {/* Non-breaking space for rendering */}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("text-xs  md:text-lg font-extralight", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("rounded-xs w-[4px] h-4 md:h-6 lg:h-6 bg-blue-500 relative -top-0.5 flex flex-wrap")}
        style={{ marginTop: '0.1em' }} // Adjust cursor position
      />
    </div>
  );
};

export default TypeWriterEffect;







