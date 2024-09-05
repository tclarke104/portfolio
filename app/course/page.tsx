'use client'
import React, { useState } from 'react';
import { SOFTWARE_LINKS, VSP_LINKS } from '../data/vspLinks';
import CourseAgenda from '../components/CourseAgenda';
import { CourseInstructors } from '../components/CourseInstructors';
import { AGENDA_ITEMS } from '../data/agendaItem';
import { COURSE_INSTRUCTORS } from '../data/instructor';
import ExpandableSection from '../components/ExpandableSection';
import { COURSE_OBJECTIVES } from '../data/courseObjectives';

export default function CoursePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionKey: string) => {
    setExpandedSection(prev => (prev === sectionKey ? null : sectionKey));
  };

  return (
    <section className="min-h-screen py-12 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Virtual Surgical Planning with Open-Source Software</h1>
          <p className="text-lg text-gray-700">
            Welcome to the Virtual Surgical Planning course! In this course, you will learn how to use open-source software tools such as 3D Slicer, Meshmixer, and others to perform virtual surgical planning for craniomaxillofacial surgery. This course is designed for surgeons, residents, and medical professionals interested in integrating digital planning into their practice.
          </p>
        </div>

        <ExpandableSection
          title="Course Objectives"
          content={
            <>
              <h4 className='pb-4'>At the completion of the course attendees will be able to: </h4>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                {COURSE_OBJECTIVES.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </>
          }
          sectionKey="courseObjectives"
          expandedSection={expandedSection}
          toggleSection={toggleSection}
        />

        <ExpandableSection
          title="Required Software"
          content={
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {SOFTWARE_LINKS.map(l => (
                <li key={l.url}>
                  <a href={l.url} className="text-blue-500 hover:underline">
                    {l.description}
                  </a>
                </li>
              ))}
            </ul>
          }
          sectionKey="requiredSoftware"
          expandedSection={expandedSection}
          toggleSection={toggleSection}
        />

        <ExpandableSection
          title="Course Agenda"
          content={<CourseAgenda agendaItems={AGENDA_ITEMS} />}
          sectionKey="agenda"
          expandedSection={expandedSection}
          toggleSection={toggleSection}
        />

        <ExpandableSection
          title="Meet the Instructors"
          content={<CourseInstructors instructors={COURSE_INSTRUCTORS} />}
          sectionKey="instructors"
          expandedSection={expandedSection}
          toggleSection={toggleSection}
        />

        <ExpandableSection
          title="Background Resources"
          content={
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {VSP_LINKS.map(l => (
                <li key={l.url}>
                  <a href={l.url} className="text-blue-500 hover:underline">
                    {l.description}
                  </a>
                </li>
              ))}
            </ul>
          }
          sectionKey="backgroundResources"
          expandedSection={expandedSection}
          toggleSection={toggleSection}
        />

        {/* Pre-Course Survey */}
        <div className="text-center mb-6">
          <a
            href="/course/prework"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
            aria-label="View Pre-Course Materials"
          >
            View Pre-Course Materials
          </a>
        </div>

        {/* Pre-Course Survey */}
        <div className="text-center mb-12">
          <a
            href="/course/survey"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            aria-label="Take the Pre-Course Survey"
          >
            Take the Pre-Course Survey
          </a>
        </div>
      </div>
    </section>
  );
}
