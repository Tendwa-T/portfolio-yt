import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Social } from '../typings'
type Props = {
    socials:Social[];
}

function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between mx-w-7xl mx-auto z-20
    xl:items-center '>
        <motion.div 
        initial={{
            x:-500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/*Social Icons*/}
            
             <SocialIcon
             url="https://www.youtube.com"
             bgColor='transparent'
             fgColor='gray'
             />
            
   
        </motion.div>

        <Link href="#contact">
        <motion.div
        initial={{
            x:500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center tex-gray-300 cursor-pointer'>
            <SocialIcon
                className="cursor-pointer"
                network='email'
                bgColor='transparent'
                fgColor='gray'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
        </motion.div>
        <a></a>
        </Link>
    </header>
  )
}

export default Header