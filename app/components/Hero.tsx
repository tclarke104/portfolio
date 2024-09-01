export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl font-bold mb-4">Hello, I'm Travis Clarke</h1>
        <p className="text-xl mb-6 text-gray-600">I'm a ENT resident, specializing in [Your Skills/Fields].</p>
        <a
          href="/portfolio"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition"
        >
          View My Work
        </a>
      </section>
    )
  }