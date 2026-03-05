'use client';

import About from '@/components/about';
import Header from '@/components/header';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className='w-full flex flex-col items-center bg-background px-4 py-5'>
      <Header />

      <section id="home" className="w-full min-h-screen flex flex-col items-center justify-center gap-4 pt-32">
        <h1 className="text-6xl font-bold text-white">Edgar Paulo Machado</h1>
        <p className="text-base text-white">
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

      <div id="contacts" className="w-full h-91.25 rounded-xl py-4 flex flex-col justify-center items-center bg-[#212125] mt-30">
        <h1 className="text-4xl font-medium text-white underline decoration-white underline-offset-4">Contacts</h1>
        <p className="text-base text-[#FDFDFD] mt-6 w-201 h-12 text-center">Feel free to reach out to me anytime if you have any questions or would like to collaborate!</p>
        <p className="text-base text-[#FDFDFD] mt-3 text-center">Lets's build something together.</p>

        <div className="w-73 h-26 flex gap-4 justify-center items-center mt-5">
          <Link href="https://github.com/edgarpaulomachado" target="_blank">
            <div className="w-14 h-14 rounded-sm bg-[#FF1493] flex justify-center items-center">
              <Image src='/git-hub.svg' width={24} height={24} alt={''} />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/edgarpaulomachado" target="_blank">
            <div className="w-14 h-14 rounded-sm bg-[#FF1493] flex justify-center items-center">
              <Image src='/LinkedIn.svg' width={24} height={24} alt={''} />
            </div>
          </Link>

          <Link href="mailto:kadyedgarpaulomacahdo@gmail.com" target="_blank">
            <div className="w-14 h-14 rounded-sm bg-[#FF1493] flex justify-center items-center">
              <Image src='/Email.svg' width={24} height={24} alt={''} />
            </div>
          </Link>
        </div>
      </div>

    </div>
  )
}