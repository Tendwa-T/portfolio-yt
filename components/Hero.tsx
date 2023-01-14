import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words:[
            "Hi, I am Tendwa",
            "How can I be of assistance to you?",
        ],
        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img
        src='https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar.png'
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        />
        <div className='z-20'>
            <h2 className='text-xs uppercase text-gray-500 pb-2 tracking-[15px]'>
                software engineer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor="#F7AB04"/>
            </h1>

            <div className='pt-5'>
                <Link href="#about"><a></a>
                <button className='heroButton'>About</button>
                </Link>

                <Link href="#experience"><a></a>
                <button className='heroButton'>Experience</button>
                </Link>

                <Link href="#skills"><a></a>
                <button className='heroButton'>Skills</button>
                </Link>

                <Link href="#projects"><a></a>
                <button className='heroButton'>Projects</button>
                </Link>
                
                
                
                
            </div>
        </div>
        
        
    </div>
  )
}

export default Hero