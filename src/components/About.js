import * as React from "react";
import { Typography, Container, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

function About() {
  return (
    <Box sx={{ bgcolor: "#e3f2fd", minHeight: "80vh", display: "flex", alignItems: "center", py: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Text Content with Animation */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -150 }} // Start further left
              animate={{ opacity: 1, x: 0 }}    // Move to normal position
              transition={{ duration: 1.5, ease: "easeOut" }} // Slower and smoother
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#1565c0",
                  mb: 3,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                }}
              >
                About Me
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "#0d47a1",
                  fontWeight: "600",
                  mb: 2,
                  fontSize: "1.4rem",
                }}
              >
                Hi, I'm <span style={{ color: "#2c3e50" }}>Humaima Tariq</span>
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  textAlign: "justify",
                  color: "#333",
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  mb: 2,
                }}
              >
                I’m a passionate <strong>Front-End Developer</strong> with a strong foundation in crafting 
                interactive, dynamic, and responsive web experiences. I have experience with <strong>HTML, CSS, JavaScript, React, 
                and Material-UI</strong>.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  textAlign: "justify",
                  color: "#333",
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  mb: 2,
                }}
              >
                I love solving complex problems, improving UI/UX, and collaborating on exciting projects. 
                Let’s build something amazing together!
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Side - Profile Picture with Animation */}
          <Grid item xs={12} md={5} display="flex" justifyContent="center">
            <motion.div
              initial={{ opacity: 0, x: 150 }} // Start further right
              animate={{ opacity: 1, x: 0 }}   // Move to normal position
              transition={{ duration: 3.5, ease: "easeOut", delay: 0.5 }} // Slower with a slight delay
            >
              <Box
                component="img"
                src="/laptop.jpg" // Replace with your actual image path
                alt="Humaima Tariq"
                sx={{
                  width: "100%",
                  maxWidth: 320,
                  height: "auto",
                  borderRadius: "50%",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
