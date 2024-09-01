'use client';

import { useState } from 'react';
import { cvData } from '../data/cv';
import ExpandableSection from '../components/ExpandableSection';

export default function CV() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Curriculum Vitae</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{cvData.summary}</p>
        </div>

        <ExpandableSection
          title="Experience"
          sectionKey="experience"
          expandedSection={expandedSection}
          toggleSection={toggleSection}
          content={
            <ul className="space-y-4 pl-5 border-l-2 border-blue-500">
              {cvData.experience.map((exp, index) => (
                <li key={index}>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-gray-600">{exp.date}</p>
                  <ul className="list-disc list-inside text-lg text-gray-700">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          }
        />

        <ExpandableSection
          title="Education"
          sectionKey="education"
          expandedSection={expandedSection}
          toggleSection={toggleSection}
          content={
            <ul className="space-y-4 pl-5 border-l-2 border-blue-500">
              {cvData.education.map((edu, index) => (
                <li key={index}>
                  <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.date}</p>
                </li>
              ))}
            </ul>
          }
        />

        <ExpandableSection
          title="Grants & Scholarships"
          sectionKey="grants"
          expandedSection={expandedSection}
          toggleSection={toggleSection}
          content={
            <ul className="space-y-4 pl-5 border-l-2 border-blue-500">
              {cvData.grantScholarships.map((cert, index) => (
                <li key={index} className="text-lg text-gray-700">
                  <span className="font-semibold">{cert.title}</span> - {cert.issuer}, {cert.year}
                </li>
              ))}
            </ul>
          }
        />

        <ExpandableSection
          title="Publications"
          sectionKey="publications"
          expandedSection={expandedSection}
          toggleSection={toggleSection}
          content={
            <ul className="space-y-4 pl-5 border-l-2 border-blue-500">
              {cvData.publications.map((pub, index) => (
                <li key={index} className="text-lg text-gray-700">
                  <span className="font-semibold">{pub.title}</span> - <i>{pub.journal}</i>, {pub.year}
                  {pub.authors && (
                    <span className="block text-sm text-gray-500">Authors: {pub.authors.join(', ')}</span>
                  )}
                  {pub.doi && (
                    <span className="block text-sm text-gray-500">DOI: {pub.doi}</span>
                  )}
                </li>
              ))}
            </ul>
          }
        />

        <ExpandableSection
          title="Posters"
          sectionKey="posters"
          expandedSection={expandedSection}
          toggleSection={toggleSection}
          content={
            <ul className="space-y-4 pl-5 border-l-2 border-blue-500">
              {cvData.posters.map((poster, index) => (
                <li key={index} className="text-lg text-gray-700">
                  <span className="font-semibold">{poster.title}</span> - {poster.conference}, {poster.year}
                  {poster.authors && (
                    <span className="block text-sm text-gray-500">Authors: {poster.authors.join(', ')}</span>
                  )}
                </li>
              ))}
            </ul>
          }
        />

        <ExpandableSection
          title="Presentations"
          sectionKey="presentations"
          expandedSection={expandedSection}
          toggleSection={toggleSection}
          content={
            <ul className="space-y-4 pl-5 border-l-2 border-blue-500">
              {cvData.presentations.map((presentation, index) => (
                <li key={index} className="text-lg text-gray-700">
                  <span className="font-semibold">{presentation.title}</span> - {presentation.event}, {presentation.year}
                  {presentation.authors && (
                    <span className="block text-sm text-gray-500">Authors: {presentation.authors.join(', ')}</span>
                  )}
                  {presentation.location && (
                    <span className="block text-sm text-gray-500">{presentation.location}</span>
                  )}
                </li>
              ))}
            </ul>
          }
        />

        <div className="text-center mt-12">
          <a
            href="/cv/Your-Name-CV.pdf"
            download="Your-Name-CV.pdf"
            className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
