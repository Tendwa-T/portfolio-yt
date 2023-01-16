import Head from 'next/head'
import { GetStaticProps} from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { Experiences, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchProjects } from '../utils/fetchProjects'

type Props = {
  pageInfo: PageInfo;
  experiences: Experiences[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];

}
export default function Home({pageInfo,experiences,skills,projects,socials}:Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#f7ab04]/80'>
      <Head>
        <title>Tendwa's Portfolio</title>
      </Head>
    
        <Header socials={socials}/>
      

      {/*Hero */}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      {/*About*/}
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/*Experience*/}
      <section id='experience' className='snap-center'>
        <Experience/>
      </section>

      {/*Skills*/}
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      {/*Projects*/}
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>

      {/*Contact me*/}
      <section id='contact' className='snap-center'>
        <ContactMe/>
      </section>

      <Link href="#hero" ><a></a>
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img
            className='h-10 w-10 rounded-full filter-grayscale hover:grayscale-0 cursor-pointer'
            src='https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png'
          />
        </div>
      </footer>
      </Link>
    </div>
   );
};


export async function getStaticProps() {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experiences[] = await fetchExperience()
  const skills: Skill[] = await fetchSkills()
  const socials: Social[] = await fetchSocials()
  const projects: Project[] = await fetchProjects()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};