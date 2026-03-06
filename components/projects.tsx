'use client';

import CardProject from "./card-project";

export default function Projects(){
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <h1 className="md:text-4xl font-medium text-[#FF1493] underline decoration-[#FF1493] underline-offset-4">Projects</h1>
            <p className="md:text-base sm:text-xs text-white md:mt-6 sm:mt-4 md:w-201 sm:w-150 h-12 text-center">Here are some of the projects I’ve worked on, showcasing my creativity, problem-solving skills, and passion for building practical solutions.</p>
            <p className="md:text-base sm:text-xs text-[#FF1493] h-6 md:mt-4 sm:mt-2 text-center">Each projects reflicts my abilities to turn ideas into reality through clean design and efficient code.</p>

            <div className='w-auto grid md:grid-cols-2 sm:grid-cols-1 items-center md:gap-5 sm:gap-3 md:mt-30 sm:mt-20'>
                <CardProject title="Mentoriza" description="Each certificate represents not only the knowledge I’ve gained but also my dedication to improving my skills and staying up to date with industry standards." image="" demo="" github="https://github.com/Mentoriza/mentoriza-dashboard"/>
                <CardProject title="News Aggregator" description="Each certificate represents not only the knowledge I’ve gained but also my dedication to improving my skills and staying up to date with industry standards." image="" demo="" github="https://github.com/edgarpaulomachado/News_Aggregator"/>
                <CardProject title="ReservaHotel" description="Each certificate represents not only the knowledge I’ve gained but also my dedication to improving my skills and staying up to date with industry standards." image="" demo="" github="https://github.com/edgarpaulomachado/ReservaHotel"/>
                <CardProject title="+ Health" description="Each certificate represents not only the knowledge I’ve gained but also my dedication to improving my skills and staying up to date with industry standards." image="" demo="" github="https://github.com/edgarpaulomachado/-Health"/>
            </div>
        </div>
    )
}