import React from 'react'
import { motion } from 'framer-motion';
import { Skill } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill

};

function Skill({ directionLeft, skill }: Props) {
  return (
  <div className="group relative flex cursor-pointer">
    <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, x: 0}}
        src={urlFor(skill?.image).url()}
        className="rounded-full border-2 border-[#806B80] object-cover w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300
        ease-in-out"
    />
        <motion.div 
        initial={{
            x: directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0}}
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">{skill?.progress}%</p>
            </div>
        </motion.div>
    
    </div>
  )
}

export default Skill;