import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

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

function Projects() {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 3, md: 6 },
        background: 'linear-gradient(135deg, #c3cfe2, #f5f7fa)', // Gradient background
        overflow: 'hidden', // Hide overflow to prevent scrollbars
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '3rem' },
          color: '#2c3e50', // Darker text color
          mb: 6,
          fontFamily: 'Poppins, sans-serif', // Modern font
          textTransform: 'uppercase',
          letterSpacing: 2,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
        }}
      >
        My Projects
      </Typography>

      {/* Auto-Scrolling Container */}
      <Box
        sx={{
          display: 'flex',
          animation: 'scroll 20s linear infinite', // Animation for auto-scroll
          '@keyframes scroll': {
            '0%': {
              transform: 'translateX(0)', // Start from the left
            },
            '100%': {
              transform: 'translateX(-100%)', // Move to the left (full width of the container)
            },
          },
        }}
      >
        {/* Double the projects array to create a seamless loop */}
        {[...projects, ...projects].map((project, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 300, // Minimum width for each card
              maxWidth: 350, // Maximum width for each card
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Softer shadow
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Enhanced hover shadow
              },
              flexShrink: 0, // Prevent cards from shrinking
              mx: 2, // Margin between cards
              display: 'flex',
              flexDirection: 'column',
              height: '500px', // Fixed height for all cards
            }}
          >
            {/* Project Image */}
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
              sx={{ objectFit: 'cover', borderBottom: '4px solid #0277BD' }} // Add a border
            />

            {/* Project Details */}
            <CardContent
              sx={{
                textAlign: 'center',
                flexGrow: 1, // Make the content take up remaining space
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Align content evenly
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
                    textTransform: 'uppercase',
                    mb: 2,
                    letterSpacing: 1.5,
                    fontSize: '1.5rem', // Fixed font size for title
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#555',
                    my: 2,
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.6,
                    minHeight: '80px', // Fixed height for description
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {project.description}
                </Typography>
              </Box>

              {/* Live Demo Button */}
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#0277BD', // Matching accent color
                    color: '#fff',
                    borderRadius: '25px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    fontSize: '1rem',
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
        ))}
      </Box>
    </Box>
  );
}

export default Projects;