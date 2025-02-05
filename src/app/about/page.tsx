'use client'
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ProjectTitle } from '@/components/about-components/ProjectTitle';
import { TeamSection } from '@/components/about-components/TeamSection';
import { InstructorsSection } from '@/components/about-components/InstructorsSection';
import { ProjectDescription } from '@/components/about-components/ProjectDescription';
import { ResourcesSection } from '@/components/about-components/ResourcesSection';

export default function AboutPage() {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ my: 4, pt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ProjectTitle
            schoolName="University of Nevada, Reno"
            departmentName="CSE Department"
          />
          <TeamSection
            teamNumber={8}
            teamName="Syntinel Nyx"
            members={[
              { name: 'Jasmine Huang', photoUrl: '/jasmine.webp' },
              { name: 'Miguel Muniz', photoUrl: '/miguel.webp' },
              { name: 'Christian Culanag', photoUrl: '/christian.webp' },
            ]}
          />
          <InstructorsSection
            instructors={[
              { name: 'David Feil-Seifer', affiliation: 'Instructor' },
              { name: 'Sara Davis', affiliation: 'Instructor' },
              { name: 'Vinh Le', affiliation: 'Teaching Assistant' },
              { name: 'Levi Scully', affiliation: 'Teaching Assistant' },
            ]}
            advisors={[
              { name: 'Ignacio Astaburuaga', affiliation: 'PhD Candidate, Team Advisor, & University of Nevada, Reno Adjunct Faculty' },
            ]}
          />
          <ProjectDescription />
          <ResourcesSection />
        </Box>
      </Container>
    </>
  );
}
