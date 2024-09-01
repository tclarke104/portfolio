import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">Hello, I'm Travis Clarke</h1>
      <p className="text-lg mb-6">I'm a ENT resident, hoping to specialize in Facial Plastics.</p>
      <a
        href="/cv"
        className="inline-block bg-indigo-500 text-white hover:text-white px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-800 hover:text-grey hover:no-underline transition-all duration-300"
      >
        View My Work
      </a>
    </section>
  )
}