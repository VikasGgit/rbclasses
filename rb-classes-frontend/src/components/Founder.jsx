// // components/Founder.jsx
// import { Box, Container, Typography, Grid, Avatar, Paper, useMediaQuery } from '@mui/material';

// const Founder = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');

//   const founderData = {
//     name: "Dr. Rajesh Bharti",
//     qualification: "PhD in Physics (IIT Delhi), 18+ Years Teaching Experience",
//     vision: "To create India's most student-centric NEET/JEE coaching with 100% conceptual clarity",
//     mission: "Every student deserves personalized mentorship to crack competitive exams",
//     achievements: [
//       "Mentored 1200+ NEET/JEE selections",
//       "50+ Students in Top 100 Ranks (NEET/JEE)",
//       "Best Educator Award (UP State - 2022)"
//     ],
//     photo: "/founder.jpg" // Replace with actual image
//   };

//   return (
//     <Box id="founder" sx={{ 
//       py: { xs: 4, md: 8 },
//       background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
//       color: 'white',
//     }}>
//       <Container maxWidth="lg">
//         <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
//           Meet Our Founder
//         </Typography>
        
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={5}>
//             <Avatar
//               src={founderData.photo}
//               alt={founderData.name}
//               sx={{ 
//                 width: isMobile ? 200 : 300, 
//                 height: isMobile ? 200 : 300,
//                 mx: 'auto',
//                 border: '4px solid #1976d2'
//               }}
//             />
//           </Grid>
          
//           <Grid item xs={12} md={7}>
//             <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
//               {founderData.name}
//             </Typography>
//             <Typography variant="h6" color="primary.light" gutterBottom>
//               {founderData.qualification}
//             </Typography>
            
//             <Paper elevation={3} sx={{ p: 3, mb: 3, bgcolor: 'rgba(25, 118, 210, 0.1)' }}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//                 Vision
//               </Typography>
//               <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
//                 "{founderData.vision}"
//               </Typography>
//             </Paper>
            
//             <Box sx={{ mb: 3 }}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//                 Key Achievements:
//               </Typography>
//               <ul style={{ paddingLeft: '20px' }}>
//                 {founderData.achievements.map((item, index) => (
//                   <li key={index} style={{ marginBottom: '8px' }}>
//                     <Typography variant="body1">✓ {item}</Typography>
//                   </li>
//                 ))}
//               </ul>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Founder;


// components/Founder.jsx
// import { Box, Container, Typography, Grid, Avatar, Paper, useMediaQuery } from '@mui/material';

// const Founder = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');

//   const founderData = {
//     name: "Dr. Rajesh Bharti",
//     qualification: "PhD in Physics (IIT Delhi), 18+ Years Teaching Experience",
//     vision: "To create India's most student-centric NEET/JEE coaching with 100% conceptual clarity",
//     mission: "Every student deserves personalized mentorship to crack competitive exams",
//     achievements: [
//       "Mentored 1200+ NEET/JEE selections",
//       "50+ Students in Top 100 Ranks (NEET/JEE)",
//       "Best Educator Award (UP State - 2022)"
//     ],
//     photo: "/founder.jpg"
//   };

//   return (
//     <Box id="founder" sx={{ 
//       py: 8,
//       pt:7,
//       background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
//       color: 'white',
//     }}>
//       <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
//         <Typography variant="h3" align="center" gutterBottom sx={{ 
//           fontWeight: 'bold', 
//           mb: 6,
//           textShadow: '0 2px 4px rgba(0,0,0,0.3)'
//         }}>
//           Meet Our Founder
//         </Typography>
        
//         <Grid container spacing={6} alignItems="center" justifyContent="center">
//           <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
//             <Avatar
//               src={founderData.photo}
//               alt={founderData.name}
//               sx={{ 
//                 width: isMobile ? 200 : 300, 
//                 height: isMobile ? 200 : 300,
//                 border: '4px solid #1976d2'
//               }}
//             />
//           </Grid>
          
//           <Grid item xs={12} md={7}>
//             <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
//               {founderData.name}
//             </Typography>
//             <Typography variant="h6" color="primary.light" gutterBottom>
//               {founderData.qualification}
//             </Typography>
            
//             <Paper elevation={3} sx={{ 
//               p: 3, 
//               mb: 3, 
//               bgcolor: 'rgba(25, 118, 210, 0.1)',
//               border: '1px solid rgba(255,255,255,0.2)',
//               borderRadius: 2
//             }}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//                 Vision
//               </Typography>
//               <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
//                 "{founderData.vision}"
//               </Typography>
//             </Paper>
            
//             <Box sx={{ mb: 3 }}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//                 Key Achievements:
//               </Typography>
//               <ul style={{ paddingLeft: '20px' }}>
//                 {founderData.achievements.map((item, index) => (
//                   <li key={index} style={{ marginBottom: '8px' }}>
//                     <Typography variant="body1">✓ {item}</Typography>
//                   </li>
//                 ))}
//               </ul>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Founder;



import { Box, Container, Typography, Grid, Avatar, Paper, useMediaQuery } from '@mui/material';

const Founder = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const founderData = {
    name: "Dr. Rajesh Bharti",
    qualification: "PhD in Physics (IIT Delhi), 18+ Years Teaching Experience",
    vision: "To create India's most student-centric NEET/JEE coaching with 100% conceptual clarity",
    mission: "Every student deserves personalized mentorship to crack competitive exams",
    achievements: [
      "Mentored 1200+ NEET/JEE selections",
      "50+ Students in Top 100 Ranks (NEET/JEE)",
      "Best Educator Award (UP State - 2022)"
    ],
    photo: "/founder.jpg",
    imageStyle: "The founder's image reflects an approachable mentor with a scholarly yet friendly demeanor, showing his connection with students",
  };

  return (
    <Box id="founder" sx={{ 
      py: 8,
      pt:7,
      background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
      color: 'white',
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ 
          fontWeight: 'bold', 
          mb: 6,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          color: '#ffffff' // Explicit white color
        }}>
          Meet Our Founder
        </Typography>
        
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src={founderData.photo}
                alt={founderData.name}
                sx={{ 
                  width: isMobile ? 200 : 300, 
                  height: isMobile ? 200 : 300,
                  border: '4px solid #1976d2',
                  margin: '0 auto'
                }}
              />
              <Typography variant="caption" sx={{ 
                display: 'block', 
                mt: 2,
                color: '#b0bec5',
                fontStyle: 'italic'
              }}>
                {founderData.imageStyle}
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
              {founderData.name}
            </Typography>
            <Typography variant="h6" color="primary.light" gutterBottom sx={{ color: '#4fc3f7' }}>
              {founderData.qualification}
            </Typography>
            
            <Paper elevation={3} sx={{ 
              p: 3, 
              mb: 3, 
              bgcolor: 'rgba(25, 118, 210, 0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 2
            }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                Vision
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#e0e0e0' }}>
                "{founderData.vision}"
              </Typography>
            </Paper>

            <Paper elevation={3} sx={{ 
              p: 3, 
              mb: 3, 
              bgcolor: 'rgba(76, 175, 80, 0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 2
            }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                Mission
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#e0e0e0' }}>
                "{founderData.mission}"
              </Typography>
            </Paper>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                Key Achievements:
              </Typography>
              <ul style={{ paddingLeft: '20px' }}>
                {founderData.achievements.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>
                    <Typography variant="body1" sx={{ color: '#eeeeee' }}>✓ {item}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Founder;