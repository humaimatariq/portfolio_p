import React from 'react';
import { Button, Typography, Box, Container, CardMedia } from '@mui/material';
import { Download } from '@mui/icons-material';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf'; 
    link.download = 'CV.pdf'; // The file name when downloading
    link.click();
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh', // Full height of the viewport
        width: '100%',
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image="./5.jpg" 
        alt="Background Image"
        sx={{ objectFit: 'cover' }}
      />
      {/* Dim Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(16, 57, 112, 0.5)', // Dim effect
        }}
      />
      {/* Centered Text */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Welcome, I'm Humaima
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          A Front-End Developer
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Download />}
          onClick={handleDownload}
        >
          Download Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
