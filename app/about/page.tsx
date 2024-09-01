import Image from 'next/image'

export default function About() {
    const aboutBlurb = [
        `Hello! I'm Travis Clarke, a third-year ENT resident with a unique blend of experience in both medicine and software engineering. I have a deep passion for advancing patient care through cutting-edge technology, and I specialize in ENT surgery with a strong interest in facial plastics, virtual surgical planning (VSP), and artificial intelligence (AI). My goal is to seamlessly integrate these fields to enhance surgical outcomes and improve the overall patient experience.`,
        `With a background in software engineering and several years of hands-on experience in the medical field, I have developed a diverse skill set that includes advanced surgical techniques, AI-driven solutions, and the application of technology to clinical practice. I have worked on projects that merge my two passions, bridging the gap between technology and medicine, particularly in the areas of VSP and AI.`,
        `Feel free to reach out if you'd like to collaborate or learn more about my work!`
    ]

  return (
    <section className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/headshot.jpeg"  // Replace with your image path
              alt="Your Name"
              width={300}
              height={300}
              className="rounded-full mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-12">
            {aboutBlurb.map(a => (
                <p className="text-lg text-gray-700 mb-6" key={a}>
                    {a}
                </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
