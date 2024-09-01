import { PROJECTS } from '@/app/data/projects'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface Project {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
}

function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    return notFound()
  }

  return (
    <section className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">{project.title}</h1>
        <Image src={project.image} alt={project.title} width={800} height={600} className="w-full object-cover mb-8" />
        <p className="text-lg text-gray-700 mb-6">{project.description}</p>
        <h2 className="text-2xl font-bold mb-4">Technologies Used:</h2>
        <ul className="list-disc list-inside mb-8">
          {project.technologies.map((tech, index) => (
            <li key={index} className="text-gray-700">{tech}</li>
          ))}
        </ul>
        <a href="/portfolio" className="text-blue-500 hover:text-blue-700">
          Back to Portfolio
        </a>
      </div>
    </section>
  )
}
