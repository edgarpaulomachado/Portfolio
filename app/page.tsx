'use client';

import About from '@/components/about';
import Header from '@/components/header';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Portfolio() {
  return (
    <>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className='w-full flex flex-col items-center bg-background px-4 py-5'>
      <Header />

      <section id="home" className="w-full min-h-screen flex flex-col items-center justify-center gap-4 md:pt-32 sm:pt-16">
        <h1 className="md:text-6xl sm:text-3xl font-bold text-white">Edgar Paulo Machado</h1>
        <p className="md:text-base sm:text-xs text-white">
          <span className="text-[#FF1493]">Front-End Developer</span> passionate about technology and creating solutions that impact lives.
        </p>

        <div className="w-auto flex gap-2 mt-5">
          <Button onClick= {() => {
            document.getElementById("contacts")?.scrollIntoView({
              behavior: "smooth"
            })
          }}> GET IN TOUCH </Button>
          <Button className='bg-[#ff149154] text-[#FF1493]'>
            <Link href="https://github.com/edgarpaulomachado">GITHUB</Link>
          </Button>
        </div>

        <div
          onClick={() => {
            document.getElementById("skills")?.scrollIntoView({
              behavior: "smooth"
            })
          }}
          className="w-9 h-9 rounded-full flex items-center justify-center 
          bg-[#FF1493] cursor-pointer animate-bounce 
          hover:scale-110 transition-all duration-300 shadow-lg mt-10"
        >
          <ArrowDown color="#000000" size={18}/>
        </div>
      </section>

      <section id="skills" className="w-full min-h-screen flex items-center justify-center">
        <Skills />
      </section>

      <section id="about" className="w-full min-h-screen flex items-center justify-center">
        <About />
      </section>

      <section id="project" className="w-full min-h-screen flex items-center justify-center">
        <Projects />
      </section>

      <div id="contacts" className="w-full md:h-91.25 sm:h-60 md:rounded-xl sm:rounded-lg md:py-4 sm:py-2 flex flex-col justify-center items-center bg-[#212125] md:mt-30 sm:mt-20">
        <h1 className="md:text-4xl sm:text-2xl font-medium text-white underline decoration-white underline-offset-4">Contacts</h1>
        <p className="md:text-base sm:text-sm  text-[#FDFDFD] md:mt-6 sm:mt-4 md:w-201 sm:w-130 h-12 text-center">Feel free to reach out to me anytime if you have any questions or would like to collaborate!</p>
        <p className="md:text-base sm:text-sm text-[#FDFDFD] mt-3 text-center">Lets's build something together.</p>

        <div className="w-73 h-26 flex gap-4 justify-center items-center mt-5">
          <Link href="https://github.com/edgarpaulomachado" target="_blank">
            <div className="md:w-14 sm:w-8 md:h-14 sm:h-8 rounded-sm bg-[#FF1493] flex justify-center items-center">
              <Image src='/git-hub.svg' width={24} height={24} alt={''} className="sm:w-4 sm:h-4"/>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/edgar-machado-92b757270" target="_blank">
            <div className="md:w-14 sm:w-8 md:h-14 sm:h-8 rounded-sm bg-[#FF1493] flex justify-center items-center">
              <Image src='/LinkedIn.svg' width={24} height={24} alt={''} className="sm:w-4 sm:h-4"/>
            </div>
          </Link>

          <Link href="mailto:kadyedgarpaulomachado@gmail.com" target="_blank">
            <div className="md:w-14 sm:w-8 md:h-14 sm:h-8 rounded-sm bg-[#FF1493] flex justify-center items-center">
              <Image src='/Email.svg' width={24} height={24} alt={''} className="sm:w-4 sm:h-4"/>
            </div>
          </Link>
        </div>
      </div>

    </div>
    </>
  )
}