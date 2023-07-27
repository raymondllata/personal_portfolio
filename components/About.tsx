import React from 'react'
import { motion } from 'framer-motion';
import linkedinimage from '../images/linkedinheadshot.jpeg'
import Image from 'next/image'
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
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
          src={urlFor(pageInfo?.profilePic).url()}
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
            {pageInfo?.backgroundInformation}</p>
        </motion.div>
    </div>
  )
}

