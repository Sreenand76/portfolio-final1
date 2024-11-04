import React from 'react'
import { motion } from 'framer-motion'
import { BsGithub } from 'react-icons/bs'

const projectsData = [
  {
    image: '/img/articlesummarizer.png',
    title: 'Ai Article Summarizer',
    description: 'An Ai article summarizer which works with OpenAi to summarize long articles',
    technologies: ["Tailwind", "React"],
    live_link:'https://ai-summarizer-seven-steel.vercel.app/',
    github_link:'https://github.com/Sreenand76/ai-summarizer'
  },
  {
    image: '/img/desktop.jpg',
    title: 'Responsive Pricing Page',
    description: 'A Responsive Pricing component built using Next.js and TypeScript',
    technologies: ["Tailwind", "React"],
    live_link:'https://pricing-page-1-2z9u.vercel.app/',
    github_link:'https://github.com/Sreenand76/pricing-page-1'
  },
  {
    image: '/img/react-fiber.png',
    title: 'Contact App',
    description: 'A FullStack App where users can manage contacts',
    technologies: ["React", "Spring Boot", "MySQL", "Docker"],
    github_link:'https://github.com/Sreenand76/contactApp'
  },
]
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity:1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24 border-white  rounded-lg p-2'>
       <a href={project.live_link}> <img src={project.image} alt={project.title} className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]' /></a>
        <div className=''>
          <div className='flex flex-col gap-3'>
            <div className=' text-xl font-semibold flex gap-5 items-center'>{project.title}<a href={project.github_link}><BsGithub/></a></div>
            <p >{project.description}</p>
          </div>
          <div className='flex flex-wrap gap-2 mt-4'>
            {
              project.technologies.map((technology, index) => (
                <span key={index} className='rounded-md bg-black p-1.5 text-xs text-white'>{technology}</span>
              ))
            }
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id='project' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24 mt-3'>
      <ScrollReveal>
        <h1 className='text-4xl font-light text-gray-200 md:text-6xl mt-10 text-start'>My Projects</h1>
      </ScrollReveal>

      <div className='flex w-full max-w-[1000px] flex-col gap-16 lg:gap-32 text-gray-300'>
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects
