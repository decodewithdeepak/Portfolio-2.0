import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'St. Andrews Institute of Technology and Management',
    period: '2020 - 2024',
    score: '80%',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Delhi Public School',
    period: '2019 - 2020',
    score: '88%',
  },
  {
    degree: 'Secondary (X)',
    institution: 'Delhi Public School',
    period: '2017 - 2018',
    score: '85.6%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}