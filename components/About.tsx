import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex relative flex-col h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            about
        </h3>

        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration:1.5,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-80
        xl:w-[500px] xl:h-[600px]"
        src='https://www.pngfind.com/pngs/m/381-3819326_default-avatar-svg-png-icon-free-download-avatar.png'
        />

        <div className='spac-y-10 px-0 md:px-10'>
            <h4 className='text-4xl text-semibold'>
                Here's a <span className='underline decoration-[#F7AB04]/50'>little</span> background
            </h4>
            <p className='text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor, 
            mi quis pharetra interdum, tortor diam pretium orci, vel ultricies 
            odio leo vitae lorem. Donec condimentum velit erat. Morbi sed ornare 
            nibh, at vestibulum eros. Morbi fringilla dolor sapien, consequat aliquet odio ultricies eget. 
            Mauris ex dui, iaculis sed condimentum eget, finibus quis est. Nunc fermentum luctus malesuada. 
            Cras posuere ornare gravida. Suspendisse sed libero ac orci varius laoreet.
            </p>
        </div>
    </motion.div>
  )
}

export default About
