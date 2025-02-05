import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface ProjectTitleProps {
  schoolName: string;
  departmentName: string;
}

export const ProjectTitle: React.FC<ProjectTitleProps> = ({ schoolName, departmentName }) => {
  return (
    <Box component="header" sx={{ mb: 4, textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Syntinel
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {schoolName}
      </Typography>
      <Typography variant="h6" component="h3">
        {departmentName}
      </Typography>
      <Typography sx={{ mt: 2 }}>Syntinel Nyx is the Senior Project for CS 426 in Computer Science, Spring 2025, at the CSE Department of UNR. It is being developed by Team 08, which is comprised of the following members:
      </Typography>
    </Box>
  );
};


