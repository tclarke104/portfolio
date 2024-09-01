
interface Project {
    slug: string
    title: string
    description: string
    image: string
    technologies: string[]
    link: string
  }

export const PROJECTS: Project[] = [
    {
      slug: 'project-one',
      title: 'Project One',
      description: 'This is a detailed description of Project One.',
      image: '/images/project1.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      link: '/portfolio/project-one',
    },
    {
      slug: 'project-two',
      title: 'Project Two',
      description: 'This is a detailed description of Project Two.',
      image: '/images/project2.png',
      technologies: ['TypeScript', 'Node.js', 'Express'],
      link: '/portfolio/project-two',
    },
    {
      slug: 'project-three',
      title: 'Project Three',
      description: 'This is a detailed description of Project Three.',
      image: '/images/project3.png',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      link: '/portfolio/project-three',
    },
    // Add more projects here
  ]