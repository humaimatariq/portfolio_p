import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

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
    <Box sx={{ py: 10, px: { xs: 3, md: 6 }, bgcolor: '#c3cfe2 ' }}>
      {/* Heading */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 'bold',
          fontSize: '3rem',
          color: 'black', 
          mb: 6,
          fontFamily: 'Roboto, sans-serif', 
          textTransform: 'uppercase',
          letterSpacing: 2,
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)', // Light shadow for depth
        }}
      >
        My Projects
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 400,
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 6,
                height: '100%', // Ensures equal height for all cards
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                '&:hover': { transform: 'translateY(-10px)', boxShadow: 12 },
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
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: '#0277BD', // Light blue for the title
                    fontFamily: 'Roboto, sans-serif', // Updated font family
                    textTransform: 'uppercase',
                    mb: 1,
                    letterSpacing: 1.5,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#555',
                    my: 1,
                    fontSize: '1rem',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  {project.description}
                </Typography>
              </CardContent>

              {/* Live Demo Button */}
              <Box sx={{ textAlign: 'center', pb: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#039BE5', // Light blue button
                    color: '#fff',
                    borderRadius: '25px',
                    px: 4,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      background: '#0288D1', // Darker blue hover
                    },
                  }}
                  href={project.liveDemo}
                  target="_blank"
                  startIcon={<LaunchIcon />}
                >
                  Live Demo
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
