import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { HomeIcon } from "@heroicons/react/24/solid"


//export default function Home() {
const Home: NextPage = () => {
  return (
    <div className="bg-customGray-800 text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7Ab0A]/80">
      <Head>
        <title>Raymond's Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
          <Hero />
      </section>

      <section id='about' className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section className="snap-center" id='experience'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'> 
      <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className="flex items-center justify-center">
        <HomeIcon className="h-10 w-10  text-[#F7AB0A]/40 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"/></div>
      </footer>
      </Link>
    </div>
  )
}

export default Home
