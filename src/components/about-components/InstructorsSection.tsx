import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

interface Person {
  name: string;
  affiliation: string;
  photoUrl?: string;
}

interface InstructorsSectionProps {
  instructors: Person[];
  advisors: Person[];
}
export const InstructorsSection: React.FC<InstructorsSectionProps> = ({ instructors, advisors }) => {
  return (
    <Box component="section" sx={{ mb: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Instructors & Advisors
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {[...instructors, ...advisors].map((person, index) => {
          const placeholderImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}`;
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={person.photoUrl || placeholderImage}
                  alt={`Photo of ${person.name}`}
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {person.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {person.affiliation}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
