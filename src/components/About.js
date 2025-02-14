import * as React from 'react';
import { Typography, Container, Box } from '@mui/material';

function About() {
  return (
    <Box sx={{ bgcolor: '#e3f2fd', minHeight: '100vh' }}>
      <Container
        sx={{
          pt: 6, // Vertical padding
          width: '100%', // Full width
          maxWidth: 'none', // Remove the maxWidth constraint
        }}
      >
        {/* Heading */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: '700',
            color: '#2c3e50',
            mb: 3,
            fontFamily: 'Poppins, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: 1.5,
          }}
        >
          About Me
        </Typography>

        {/* Text Content Section */}
        <Typography
          variant="h5"
          sx={{
            color: '#3498db',
            fontWeight: '600',
            fontFamily: 'Roboto, sans-serif',
            mb: 2,
            fontSize: '1.3rem',
          }}
        >
          Hi, I'm <span style={{ color: '#2c3e50' }}>Humaima Tariq</span>
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            textAlign: 'justify',
            color: '#333',
            lineHeight: 1.7,
            fontSize: '1.1rem',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            mb: 2,
          }}
        >
          I’m a passionate <strong>Front-End Developer</strong> with a strong foundation in crafting interactive, dynamic, and responsive web experiences. I have a solid grasp of core web technologies including HTML , CSS , JavaScript , React, and Material-UI, but I am constantly striving to enhance my skills. I believe in writing clean, efficient, and well-structured code that not only delivers results but also creates delightful user experiences.
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            textAlign: 'justify',
            color: '#333',
            lineHeight: 1.7,
            fontSize: '1.1rem',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            mb: 2,
          }}
        >
          Over the years, I've developed a love for building beautiful and functional web pages. The evolving nature of web technologies excites me, and I am always looking to stay ahead of the curve by learning and experimenting with new tools and frameworks. Whether it's solving complex problems or turning creative ideas into reality, I am driven to make a positive impact through my work.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'justify',
            color: '#333',
            lineHeight: 1.7,
            fontSize: '1.1rem',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
          }}
        >
          I love collaborating with like-minded people and working on exciting projects. If you're looking for a passionate developer who cares about both the code and the end-user, feel free to get in touch for collaborations or any opportunities to build something amazing together.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
