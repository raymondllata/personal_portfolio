import React from 'react'
import { motion } from 'framer-motion';
import linkedinimage from '../images/linkedinheadshot.jpeg'
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
    <div
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 test-2xl">
        About
    </h3>
    <motion.div
        initial={{
            x:-200,
            opacity: 0,
        }} 
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0}}
        viewport={{once: true }}
        >
        <div className="relative -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rouned-full object-cover md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]">
        <Image
          src={linkedinimage}
          alt="LinkedIn Headshot"
          className="rounded-full w-full h-full md:rounded-lg"
          layout="fill" // Make the image fill its container
        />
      </div>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1.5}}
            className="space-y-10 px-0 md:px-10"
        >
            <h4 className="text-4xl font-semibold">
                Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background
            </h4>
            <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </motion.div>
    </div>
  )
}

