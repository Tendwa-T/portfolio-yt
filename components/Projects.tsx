import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function Projects({}: Props) {
    const projects=[1,2,3,4,5];

  return (
    <motion.div
    key={1}
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}

    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div 
        key={2}
        className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20
    scrollbar-thumb-[#f7ab04]/80'>
            {projects.map((project, i) =>(
                <div 
                key={3}
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                        initial={{
                            y:-300,
                            opacity:0,
                        }}
                        whileInView={{opacity:1,y:0,}}
                        transition={{duration:1.2}}
                        viewport={{once:true}}
                        src='https://i.insider.com/61eab2a82b43ff00185df7be?width=700'
                        alt="" 
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#f7ab04]/50'>Case study {i+1} of {projects.length}:</span>Netflix Clone
                        </h4>

                        <p className='text-base text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat, tellus vitae rutrum pretium, tellus mi interdum mi, vel consequat dolor diam a metus. Nam at dui vestibulum, facilisis elit at, bibendum magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales mattis leo. Pellentesque sollicitudin nunc imperdiet metus aliquam congue. Etiam vel dui mauris. Praesent imperdiet ligula vel magna cursus, et facilisis sem pellentesque. Proin vulputate lacus et cursus sagittis. Duis quam nisi.
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#f7ab04]/10 left-0 h-[500px] -skew-y-12'>

        </div>

    </motion.div>
  )
}

export default Projects