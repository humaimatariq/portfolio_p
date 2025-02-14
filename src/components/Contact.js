import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Container, Typography, TextField, Button, Alert, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .send(
        'service_v7m597d', // Replace with your EmailJS Service ID
        'template_gffzdgt', // Replace with your EmailJS Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        'KFjf_MCM6M0iBupSz' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <>
      <Box sx={{ py: 8, bgcolor: '#e3f2fd' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
            {/* Left: Form */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
                Contact Me
              </Typography>

              {success && <Alert severity="success">Message sent successfully!</Alert>}
              {error && <Alert severity="error">Failed to send message. Please try again.</Alert>}

              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Name"
                  variant="outlined"
                  name="name"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  fullWidth
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  name="message"
                  fullWidth
                  required
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ fontWeight: 'bold' }}>
                  Send Message
                </Button>
              </Box>
            </Box>

            {/* Right: Contact Info */}
            <Box sx={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
                Humaima Tariq
              </Typography>
              <Typography variant="h6" sx={{ color: '#555', mb: 3 }}>
                Front-End Developer
              </Typography>

              {/* Phone */}
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
                Phone
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
                <a href="tel:+923160574902" style={{ color: '#1976d2', textDecoration: 'none' }}>+92 3160574902</a>
              </Typography>

              {/* Email */}
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
                Email
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
                <a href="mailto:humaimatariq233@gmail.com" style={{ color: '#1976d2', textDecoration: 'none' }}>humaimatariq233@gmail.com</a>
              </Typography>

              {/* Social Icons */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
                <IconButton
                  href="https://github.com/humaimatariq"
                  target="_blank"
                  sx={{ color: '#1976d2', fontSize: '2rem' }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/humaima-tariq-00b7a2248"
                  target="_blank"
                  sx={{ color: '#1976d2', fontSize: '2rem' }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 2, bgcolor: '#1976d2', color: 'white', textAlign: 'center' }}>
        <Typography variant="body1">&copy; {new Date().getFullYear()} Humaima Tariq. All rights reserved.</Typography>
      </Box>
    </>
  );
}

export default Contact;
