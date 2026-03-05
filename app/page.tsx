'use client';

import About from '@/components/about';
import Header from '@/components/header';
import Skills from '@/components/skills';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

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
          <Button>GET IN TOUCH</Button>
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

    </div>
  )
}