import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import linkedinimage from '../images/linkedinheadshot.jpeg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name's Raymond", 
            "I love to build",
            "<BlankText />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles />
        <div className="relative">
            <Image 
                className="rounded-full"
                src={linkedinimage}
                alt="LinkedIn Headshot"
                width={160} // Set the desired width of the image
                height={160} // Set the desired height of the image
                layout="fixed" // Use the "fixed" layout
                objectFit="cover" // Adjust the objectFit property if needed
            />
        </div>
        <div className = "z-10">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]"> Software Engineer</h2>
            <h1 className="relative text-5xl lg:text-6xl fond-semibold scroll-px-10">
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>

            <div className="pt-5">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>


    </div>
  )
}

