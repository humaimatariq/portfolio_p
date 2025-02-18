import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { keyframes } from '@mui/system';

// Sample project data
const projects = [
  {
    title: "Sweet Treats Website",
    description: "A beautifully designed food website showcasing various desserts.",
    image: "./bakery.png",
    liveDemo: "https://test-task-nine-woad.vercel.app/",
  },
  {
    title: "User Management System",
    description: "A CRUD-based user management system using HTML, CSS, and JavaScript.",
    image: "./user.png",
    liveDemo: "https://crud-app-using-html-css-javascript.vercel.app/",
  },
  {
    title: "Figma Design",
    description: "A Bootstrap-based website designed from a Figma prototype.",
    image: "./keefer.png",
    liveDemo: "https://keefer-bootstrap-1.vercel.app/",
  },
  {
    title: "Figma Design",
    description: "A modern UI design created from a Figma prototype.",
    image: "./redCard.png",
    liveDemo: "https://form-validation-on-redcard-task.vercel.app/",
  },
];

// Animation for sliding from left to right
const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

function Projects() {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
        background: '#f5f7fa', // Light background
        overflow: 'hidden',
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '2.5rem' },
          color: '#2c3e50', // Dark text color
          mb: 6,
          fontFamily: 'Poppins, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: 1.5,
        }}
      >
        My Projects
      </Typography>

      {/* Projects Grid */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                },
                maxHeight: '500px', // Set max height for uniform size
                animation: `${slideIn} 4.7s ease-out`, // Apply sliding animation
                animationDelay: `${index * 0.2}s`, // Stagger animation for each project
              }}
            >
              {/* Project Image */}
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover' }}
              />

              {/* Project Details */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 3,
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: '#0277BD', // Accent color
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                      fontSize: '1.25rem',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#555',
                      fontFamily: 'Poppins, sans-serif',
                      lineHeight: 1.6,
                      mb: 2,
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>

                {/* Live Demo Button */}
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#0277BD',
                      color: '#fff',
                      borderRadius: '25px',
                      px: 4,
                      py: 1,
                      fontWeight: 'bold',
                      textTransform: 'none',
                      fontSize: '0.9rem',
                      transition: 'background 0.3s ease-in-out',
                      '&:hover': {
                        background: '#025f9e', // Darker shade on hover
                      },
                    }}
                    href={project.liveDemo}
                    target="_blank"
                    startIcon={<LaunchIcon />}
                  >
                    Live Demo
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
