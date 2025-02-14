import * as React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';

function Skills() {
  return (
    <Box sx={{ py: 8, bgcolor: '#e3f2fd' }}>
      {/* Heading */}
      <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
        Skills
      </Typography>

      {/* Skills List */}
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Skill 1 - HTML */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: '#fff', borderRadius: 2, boxShadow: 3, textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                HTML
              </Typography>
              <LinearProgress variant="determinate" value={90} sx={{ mt: 2, height: 10, borderRadius: 5 }} />
              <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
                90% Proficient
              </Typography>
            </Paper>
          </Grid>

          {/* Skill 2 - CSS */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: '#fff', borderRadius: 2, boxShadow: 3, textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                CSS
              </Typography>
              <LinearProgress variant="determinate" value={85} sx={{ mt: 2, height: 10, borderRadius: 5 }} />
              <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
                85% Proficient
              </Typography>
            </Paper>
          </Grid>

          {/* Skill 3 - JavaScript */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: '#fff', borderRadius: 2, boxShadow: 3, textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                JavaScript
              </Typography>
              <LinearProgress variant="determinate" value={80} sx={{ mt: 2, height: 10, borderRadius: 5 }} />
              <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
                80% Proficient
              </Typography>
            </Paper>
          </Grid>

          {/* Skill 4 - Bootstrap */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: '#fff', borderRadius: 2, boxShadow: 3, textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Bootstrap
              </Typography>
              <LinearProgress variant="determinate" value={95} sx={{ mt: 2, height: 10, borderRadius: 5 }} />
              <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
                95% Proficient
              </Typography>
            </Paper>
          </Grid>

          {/* Skill 5 - React */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: '#fff', borderRadius: 2, boxShadow: 3, textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                React
              </Typography>
              <LinearProgress variant="determinate" value={70} sx={{ mt: 2, height: 10, borderRadius: 5 }} />
              <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
                70% Proficient
              </Typography>
            </Paper>
          </Grid>

          {/* Skill 6 - Material-UI */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: '#fff', borderRadius: 2, boxShadow: 3, textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Material-UI
              </Typography>
              <LinearProgress variant="determinate" value={95} sx={{ mt: 2, height: 10, borderRadius: 5 }} />
              <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
                95% Proficient
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;
