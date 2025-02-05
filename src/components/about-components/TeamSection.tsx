import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

interface TeamMember {
  name: string;
  photoUrl: string;
}

interface TeamSectionProps {
  teamNumber: number;
  teamName: string;
  members: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ teamNumber, teamName, members }) => {
  return (
    <Box component="section" sx={{ mb: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Team {teamNumber}: {teamName}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {members.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={member.photoUrl}
                alt={`Photo of ${member.name}`}
              />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {member.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


