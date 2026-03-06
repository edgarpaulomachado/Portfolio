'use client';


import Card from './cards';
import GitHub from '@/public/GitHub.svg';
import  React from '@/public/React.svg';
import NextJs from '@/public/NextJs.svg';
import Tailwind from '@/public/Tailwind.svg';
import TypeScript from '@/public/TypeScript.svg'; 
import JavaScript from '@/public/JavaScript.svg';

export default function Skills() {
    return (
        <div className='w-full flex flex-col gap-3 items-center bg-background md:px-4 sm:px-2'>
            <h1 className='md:text-4xl sm:text-2xl font-medium text-[#FF1493] underline decoration-[#FF1493] underline-offset-4'>Skills</h1>
            <p className="md:text-base sm:text-xs text-white text-center md:mt-4 sm:mt-2">Over time, I’ve developed a diverse set of skills that help me adapt to different challenges.</p>
            <p className='md:w-160 sm:w-150 h-12 md:text-base sm:text-xs text-[#FF1493] text-center mt-2'>From technical expertise to creative thinking, these skills allow me to deliver high-quality work and bring value to every project I take on.</p>

            <div className='w-auto h-46 grid md:grid-cols-3 sm:grid-cols-2 items-center md:gap-5 sm:gap-3 mt-10'>
                <Card title="JavaScript" description="Proficient in JavaScript and its frameworks." image={JavaScript} bgColor='#000000'/>
                <Card title="React" description="Experienced in building user interfaces with React." image={React} bgColor='#000000'/>
                <Card title="TypeScript" description="Skilled in using TypeScript for type-safe development." image={TypeScript} bgColor='#3178C6'/>

                <Card title="Next.js" description="Experienced in building server-rendered applications with Next.js." image={NextJs} bgColor='#000000'/>
                <Card title="Tailwind CSS" description="Skilled in using Tailwind CSS for responsive design." image={Tailwind} bgColor='#FFFFFF'/>
                <Card title="Git" description="Proficient in version control using Git." image={GitHub} bgColor='#000000'/>
            </div>
        </div>
    )
}