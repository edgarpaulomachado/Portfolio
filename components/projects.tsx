'use client';

import CardProject from "./card-project";

export default function Projects(){
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-medium text-[#FF1493] underline decoration-[#FF1493] underline-offset-4">Projects</h1>
            <p className="text-base text-white mt-6 w-201 h-12 text-center">Here are some of the projects I’ve worked on, showcasing my creativity, problem-solving skills, and passion for building practical solutions.</p>
            <p className="text-base text-[#FF1493] h-6 mt-4 text-center">Each projects reflicts my abilities to turn ideas into reality through clean design and efficient code.</p>

            <div className='w-auto grid grid-cols-2 items-center gap-5 mt-30'>
                <CardProject title="Mentoriza" description="Each certificate represents not only the knowledge I’ve gained but also my dedication to improving my skills and staying up to date with industry standards." image="" demo="" github="https://github.com/Mentoriza/mentoriza-dashboard"/>
                <CardProject title="News Aggregator" description="Each certificate represents not only the knowledge I’ve gained but also my dedication to improving my skills and staying up to date with industry standards." image="" demo="" github="https://github.com/edgarpaulomachado/News_Aggregator"/>
                <CardProject title="ReservaHotel" description="Each certificate represents not only the knowledge I’ve gained but also my dedication to improving my skills and staying up to date with industry standards." image="" demo="" github="https://github.com/edgarpaulomachado/ReservaHotel"/>
                <CardProject title="+ Health" description="Each certificate represents not only the knowledge I’ve gained but also my dedication to improving my skills and staying up to date with industry standards." image="" demo="" github="https://github.com/edgarpaulomachado/-Health"/>
            </div>
        </div>
    )
}