'use client';

import { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface ExpandableSectionProps {
  title: string;
  content: React.ReactNode;
  sectionKey: string;
  expandedSection: string | null;
  toggleSection: (section: string) => void;
}

export default function ExpandableSection({
  title,
  content,
  sectionKey,
  expandedSection,
  toggleSection,
}: ExpandableSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.height = expandedSection === sectionKey
        ? `${sectionRef.current.scrollHeight}px`
        : '0px';
    }
  }, [expandedSection, sectionKey]);

  return (
    <div className="mb-12">
      <h2
        id={sectionKey}
        className="text-2xl font-bold mb-4 cursor-pointer flex items-center justify-between"
        onClick={() => toggleSection(sectionKey)}
      >
        {title}
        {expandedSection === sectionKey ? (
          <FiChevronUp className="ml-2 transition-transform duration-300" />
        ) : (
          <FiChevronDown className="ml-2 transition-transform duration-300" />
        )}
      </h2>
      <div
        ref={sectionRef}
        className={`expanding-section ${expandedSection === sectionKey ? 'expanded' : 'collapsed'}`}
      >
        {content}
      </div>
    </div>
  );
}
