'use client';

import Image from 'next/image';

export default function About(){
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center px-5">
            <h1 className="text-4xl font-medium text-[#FF1493] underline decoration-[#FF1493] underline-offset-4">About Me</h1>

            <div className="w-full flex items-center gap-10 mt-20">
                <Image src={'/profile.png'} alt={'Profile Image'} width={600} height={100} />

                <p className="text-base text-white">
                    I am a passionate <span className="text-[#FF1493]">Front-End Developer</span> with experience in creating modern web applications. I enjoy solving problems and turning ideas into reality through code.
                    I love creating clean, responsive, and user-friendly web applications that balance functionality with elegant design. With a strong foundation in modern web technologies, I thrive on turning complex problems into simple, intuitive experiences.

                    When I am not coding, I enjoy exploring new technologies, improving my UI/UX skills, and working on personal projects that challenge me to grow as a developer. My goal is to build digital solutions that make an impact while continuously learning and evolving in the world of web development.
                </p>
            </div>
        </div>
    )
}