import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const pages = ['Home', 'About', 'Education', 'Experience', 'Projects', 'Contact'];

function Navbar({ activePage, setActivePage }) {

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActivePage(sectionId);
  };

  const isActivePage = (page) => activePage === page.toLowerCase() ? '#1976d2' : 'gray';

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fff', zIndex: 1300 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon sx={{ color: '#000' }} />
            </IconButton>
          </Box>

          {/* Name and Avatar Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Tooltip title="Humaima Tariq">
              <Avatar alt="Humaima Tariq" src="./5.jpg" sx={{ mr: 2 }} />
            </Tooltip>
            <Typography
              variant="h6"
              sx={{
                color: '#2c3e50',
                fontWeight: 'bold',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.4rem',
                letterSpacing: 1.5,
                textTransform: 'uppercase',
              }}
            >
              Humaima Tariq
            </Typography>
          </Box>

          {/* Desktop Menu Items */}
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleScrollToSection(page.toLowerCase())}
                sx={{
                  my: 2,
                  color: isActivePage(page),
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  '&:hover': { color: '#1976d2' },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
