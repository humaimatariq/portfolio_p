import * as React from 'react';
import { Box, Typography, Divider, Container, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';

function Education() {
  const theme = useTheme();

  return (
    <Box sx={{ 
      py: 10,
      // background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      backgroundColor:'#c3cfe2',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <Box sx={{
        position: 'absolute',
        top: -100,
        right: -100,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 0 50px rgba(255, 255, 255, 0.3)'
      }} />
      
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 800,
              color: theme.palette.text.primary,
              mb: 8,
              fontFamily: 'Inter, sans-serif',
              position: 'relative',
              '&:after': {
                content: '""',
                display: 'block',
                width: '80px',
                height: '4px',
                background: theme.palette.primary.main,
                margin: '20px auto 0',
                borderRadius: 2
              }
            }}
          >
            Education
          </Typography>
        </motion.div>

        {/* Education Timeline */}
        <Box sx={{
          position: 'relative',
          pl: { xs: 0, md: 4 },
          ml: { xs: 0, md: 4 },
          borderLeft: { xs: 0, md: `3px solid ${theme.palette.primary.main}`}
        }}>
          {/* Timeline connector */}
          <Box sx={{
            position: 'absolute',
            left: { xs: -8, md: -4 },
            top: 40,
            bottom: 40,
            width: '3px',
            background: theme.palette.primary.light,
            display: { xs: 'none', md: 'block' }
          }} />

          {/* Education Item */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box sx={{
              bgcolor: 'background.paper',
              p: 4,
              borderRadius: 4,
              boxShadow: theme.shadows[4],
              mb: 4,
              position: 'relative',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              {/* Timeline dot */}
              <TimelineDot sx={{ 
                position: 'absolute',
                left: { xs: -8, md: -17 },
                top: 40,
                bgcolor: theme.palette.primary.main,
                boxShadow: theme.shadows[2],
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <SchoolIcon sx={{ fontSize: 16, color: 'white' }} />
              </TimelineDot>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ 
                  width: 56,
                  height: 56,
                  bgcolor: theme.palette.primary.light,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 3
                }}>
                  <SchoolIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    lineHeight: 1.2
                  }}>
                    Comsats University Islamabad
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: theme.palette.text.secondary,
                    fontWeight: 500
                  }}>
                    Abbottabad Campus
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ pl: 9 }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mb: 1
                }}>
                  B.S. in Computer Science
                </Typography>
                
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                  '& svg': {
                    mr: 1,
                    color: theme.palette.text.secondary
                  }
                }}>
                  <Typography variant="body2" sx={{ 
                    color: theme.palette.text.secondary,
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    September 2020 - September 2024
                  </Typography>
                </Box>

                <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />

                <Typography variant="body1" sx={{ 
                  color: theme.palette.text.secondary,
                  lineHeight: 1.6
                }}>
                  <Box component="span" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                    Key Courses:
                  </Box>{' '}
                  Data Structures & Algorithms, Web Development, Machine Learning, 
                  Mobile App Development, Database Systems, Artificial Intelligence
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Education;