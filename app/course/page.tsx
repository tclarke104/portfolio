import React from 'react';
import { SOFTWARE_LINKS, VSP_LINKS } from '../data/vspLinks';

export interface RelevantLinks {
    url: string;
    description: string;
}

export default function CoursePage() {
  return (
    <section className="min-h-screen py-12 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Course Overview */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Virtual Surgical Planning with Open-Source Software</h1>
          <p className="text-lg text-gray-700">
            Welcome to the Virtual Surgical Planning course! In this course, you'll learn how to use open-source software tools such as 3D Slicer, Meshmixer, and others to perform virtual surgical planning for craniomaxillofacial surgery. This course is designed for surgeons, residents, and medical professionals interested in integrating digital planning into their practice.
          </p>
        </div>

        {/* Background Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Background Resources</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {VSP_LINKS.map(l => (
                <li><a href={l.url} className="text-blue-500 hover:underline">{l.description}</a></li>
            ))}
          </ul>
        </div>

        {/* YouTube Video */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Course Introduction Video</h2>
          <div className="aspect-w-16 aspect-h-9">
            COMING SOON!
            {/* <iframe
              src="https://www.youtube.com/embed/[YouTube Video ID]"
              title="Course Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe> */}
          </div>
        </div>

        {/* Required Software */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Required Software</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {SOFTWARE_LINKS.map(l => (
                <li><a href={l.url} className="text-blue-500 hover:underline">{l.description}</a></li>
            ))}
          </ul>
        </div>

        {/* Pre-Course Survey */}
        <div className="text-center">
        <a
            href="/course/survey"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
            Take the Pre-Course Survey
            </a>
        </div>
      </div>
    </section>
  );
}
