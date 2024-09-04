'use client'

import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ExpandableSection from '../components/ExpandableSection';

interface Section {
  title: string;
  contentHtml: string;
  videoUrl?: string;
}

interface PreworkContentProps {
  sections: Section[];
}

const PreworkContent: React.FC<PreworkContentProps> = ({ sections }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSections, setFilteredSections] = useState<Section[]>(sections);

  useEffect(() => {
    // Filter sections based on the search query
    setFilteredSections(
      sections.filter((section) =>
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.contentHtml.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, sections]);

  const toggleSection = (sectionKey: string) => {
    setExpandedSection((prev) => {
      const newSection = prev === sectionKey ? null : sectionKey;

      if (newSection) {
        setTimeout(() => {
          const element = document.getElementById(newSection)
          if (element) {
            const yOffset = -10; 
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
          }
        }, 0);
      }

      return newSection;
    });
  };

  return (
    <section className="min-h-screen py-12 pt-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Prework for Virtual Surgical Planning Course</h1>
          <p className="text-lg text-gray-600">
            Prepare by reviewing the materials below before attending the course. These resources will help you get the most out of the hands-on sessions.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search prework..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation to each section */}
        <nav className="mb-8">
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {filteredSections.map((section, index) => (
              <li key={index}>
                <a
                  href={`#section-${index + 1}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`section-${index + 1}`)?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Render each section without cards */}
        {filteredSections.map((section, index) => (
          <div key={index} id={`section-${index + 1}`} className="mb-8">
            <ExpandableSection
              title={section.title}
              content={
                <div className="prose prose-lg max-w-none text-gray-700 mt-4">
                  <div dangerouslySetInnerHTML={{ __html: section.contentHtml }} />
                  {section.videoUrl && (
                    <div className="mt-6">
                      <iframe
                        width="100%"
                        height="315"
                        src={section.videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                      ></iframe>
                    </div>
                  )}
                </div>
              }
              sectionKey={`section-${index + 1}`}
              expandedSection={expandedSection}
              toggleSection={toggleSection}
            />
            {index < filteredSections.length - 1 && <hr className="mt-8 mb-8 border-gray-300" />}
          </div>
        ))}

        {/* Callout Box for Important Notes */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 p-4 my-12 rounded-lg shadow-sm">
          <p className="font-bold">Important Note:</p>
          <p>
            Please ensure that you review all sections thoroughly before the course begins. The hands-on sessions will build on the concepts covered in these materials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreworkContent;
