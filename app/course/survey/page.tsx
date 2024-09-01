import React from 'react';

export default function CourseSurveyPage() {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Pre-Course Survey</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Please fill out the following survey to help us tailor the course content to your needs. Your feedback is valuable in making this course a success.
      </p>

      {/* Responsive Iframe */}
      <div className="w-full flex justify-center">
        <iframe
          src="https://forms.office.com/r/1b89ZJJXWP?embed=true"
          frameBorder="0"
          style={{ 
            border: 'none', 
            width: '100%', 
            height: '80vh',  // Adjust this height as needed
            maxWidth: '1024px',
          }}
          allowFullScreen
          title="Pre-Course Survey"
        ></iframe>
      </div>
    </section>
  );
}
