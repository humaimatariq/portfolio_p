import * as React from 'react';
import { Box, Container, Typography, Paper, Divider } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { motion } from 'framer-motion';

const fadeIn = (direction, delay) => ({
  hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: delay, ease: 'easeInOut' },
  },
});

const itemFadeIn = (delay) => ({
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay } },
});

function Experience() {
  return (
    <Box sx={{ py: 4, bgcolor: '#f0f4f8' }}>
      {/* Heading */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', color: '#1976d2', mb: 3, fontSize: { xs: '1.5rem', md: '2rem' } }}
      >
        Experience
      </Typography>

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: 'stretch' }}>
          {/* Robotics World */}
          <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ flex: 1 }}>
            <Paper
              elevation={3}
              sx={{
                p: 1,
                px:4,
                bgcolor: '#fff',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
                height: '100%', // Ensure the card takes full height
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Title & Company */}
              <motion.div variants={itemFadeIn(0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <WorkIcon sx={{ color: '#1976d2', mr: 1, fontSize: '1.5rem' }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>Front-End Development Intern</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>Robotics World</Typography>
                    <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>Jan 2025 – Present</Typography>
                  </Box>
                </Box>
                <Divider sx={{ mb: 1 }} />
              </motion.div>

              {/* Experience Points */}
              <Box sx={{ flex: 1 }}> {/* Allow content to grow and fill space */}
                {[
                  "Worked on various front-end projects to create dynamic and visually appealing web applications.",
                  "Enhanced UI/UX design and responsiveness using React, Material-UI, and Tailwind CSS.",
                  "Implemented interactive features and optimized performance for a seamless user experience.",
                  "Collaborated with a development team to integrate front-end components with back-end systems.",
                  "Utilized GitHub for version control and efficient workflow management.",
                ].map((text, index) => (
                  <motion.div key={index} variants={itemFadeIn(0.3 + index * 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CodeIcon sx={{ color: '#555', mr: 1, fontSize: '1.25rem' }} />
                      <Typography variant="body2" sx={{ color: '#555' }}>{text}</Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </motion.div>

          {/* Urraan */}
          <motion.div variants={fadeIn('right', 0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ flex: 1 }}>
            <Paper
              elevation={3}
              sx={{
                p: 1,
                px:4,
                bgcolor: '#fff',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
                height: '100%', // Ensure the card takes full height
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Title & Company */}
              <motion.div variants={itemFadeIn(0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <WorkIcon sx={{ color: '#1976d2', mr: 1, fontSize: '1.5rem' }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>Front-End Development Intern</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>Urraan - Runway To Digital Flight</Typography>
                    <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>Nov 2024 – Dec 2024</Typography>
                  </Box>
                </Box>
                <Divider sx={{ mb: 1 }} />
              </motion.div>

              {/* Experience Points */}
              <Box sx={{ flex: 1 }}> {/* Allow content to grow and fill space */}
                {[
                  "Collaborated on multiple front-end web development projects, creating responsive and user-friendly designs.",
                  "Developed and enhanced website features using HTML, CSS, JavaScript, and Bootstrap.",
                  "Designed and tested responsive layouts with media queries to ensure cross-device compatibility.",
                  "Worked on React projects, utilizing Material-UI to build modern and interactive user interfaces.",
                  "Applied version control using GitHub for efficient project management and collaboration.",
                ].map((text, index) => (
                  <motion.div key={index} variants={itemFadeIn(0.3 + index * 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CodeIcon sx={{ color: '#555', mr: 1, fontSize: '1.25rem' }} />
                      <Typography variant="body2" sx={{ color: '#555' }}>{text}</Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Experience;