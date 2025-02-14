import * as React from 'react';
import { Box, Container, Typography, Paper, Divider } from '@mui/material';

function Experience() {
  return (
    <Box sx={{ py: 8, bgcolor: '#e3f2fd' }}>
      {/* Heading */}
      <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
        Experience
      </Typography>

      {/* Experience List */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
          }}
        >
          {/* Experience Item 1 - Robotics World */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              bgcolor: '#fff',
              borderRadius: 2,
              boxShadow: 3,
              flex: 1, // Ensures equal width
              '&:hover': { boxShadow: 8 },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Front-End Development Intern
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
              Robotics World
            </Typography>
            <Typography variant="body2" sx={{ color: '#555', mb: 2 }}>
              Jan 2025 – Present
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Typography variant="body2" sx={{ color: '#555' }}>
              • Working on various front-end projects to create dynamic and visually appealing web applications.
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              • Enhancing UI/UX design and responsiveness using React, Material-UI, and Tailwind CSS.
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              • Implementing interactive features and optimizing performance for a seamless user experience.
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              • Collaborating with a development team to integrate front-end components with back-end systems.
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              • Utilizing GitHub for version control and efficient workflow management.
            </Typography>
          </Paper>

          {/* Experience Item 2 - Urraan Internship */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              bgcolor: '#fff',
              borderRadius: 2,
              boxShadow: 3,
              flex: 1, // Ensures equal width
              '&:hover': { boxShadow: 8 },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Front-End Development Intern
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
              Urraan - Runway To Digital Flight
            </Typography>
            <Typography variant="body2" sx={{ color: '#555', mb: 2 }}>
              Nov 2024 – Dec 2024
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Typography variant="body2" sx={{ color: '#555' }}>
              • Collaborated on multiple front-end web development projects, creating responsive and user-friendly designs.
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              • Developed and enhanced website features using HTML, CSS, JavaScript, and Bootstrap.
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              • Designed and tested responsive layouts with media queries to ensure cross-device compatibility.
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              • Worked on React projects, utilizing Material-UI to build modern and interactive user interfaces.
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              • Applied version control using GitHub for efficient project management and collaboration.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default Experience;
