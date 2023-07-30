import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
    socials: Social[]
    
}

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className="flex flex-row items-center">
            {/* Social Icons */}
            {socials.map((social) => (
                <SocialIcon 
                key={ social._id }
                url={social.url}
                fgColor='#806B80'
                bgColor='transparent'
                target="_blank"
                className='pulse-effect'   
            />
            ))}
        
        </motion.div>
        <Link href="#contact">
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center text-color cursor-pointer pulse-effect'>
            <SocialIcon 
                className="cursor-pointer"
                network="email"
                fgColor='#806B80'
                bgColor='transparent'
            />
            <p className="uppercase hidden md:inline-flex text-sm text-color">Get in Touch</p>
        </motion.div>
        </Link>
    </header>
  )
}
