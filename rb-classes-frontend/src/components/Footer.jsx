

// // components/Footer.jsx
// import { 
//   Box, Container, Typography, Grid, Link, Divider, 
//   IconButton, useMediaQuery 
// } from '@mui/material';
// import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

// const Footer = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const currentYear = new Date().getFullYear();

//   return (
//     <Box component="footer" sx={{ 
//       py: { xs: 4, md: 6 },

//       bgcolor: 'grey.900', 
//       color: 'white',
//       borderTop: '1px solid',
//       borderColor: 'grey.700'
//     }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//               RB Classes
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
//               Premier institute for NEET & JEE preparation in Gorakhpur since 2010.
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
//               <IconButton sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
//                 <Facebook />
//               </IconButton>
//               <IconButton sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
//                 <Twitter />
//               </IconButton>
//               <IconButton sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
//                 <Instagram />
//               </IconButton>
//               <IconButton sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
//                 <YouTube />
//               </IconButton>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Quick Links
//             </Typography>
//             <Link href="#courses" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
//               Courses
//             </Link>
//             <Link href="#admission" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
//               Admission
//             </Link>
//             <Link href="#performers" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
//               Success Stories
//             </Link>
//             <Link href="#faculty" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
//               Faculty
//             </Link>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Resources
//             </Typography>
//             <Link href="#" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
//               Study Material
//             </Link>
//             <Link href="#" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
//               Test Series
//             </Link>
//             <Link href="#" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
//               Video Lectures
//             </Link>
//             <Link href="#" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
//               Doubt Sessions
//             </Link>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Contact Us
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
//               Doudpur, Gorakhpur
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
//               Uttar Pradesh - 273008
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
//               Phone: +91 98765 43210
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
//               Email: info@rbclasses.com
//             </Typography>
//           </Grid>
//         </Grid>
//         <Divider sx={{ my: 3, borderColor: 'grey.700' }} />
//         <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
//           © {currentYear} RB Classes. All Rights Reserved.
//         </Typography>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;


import { 
  Box, Container, Typography, Grid, Link, Divider, 
  IconButton, useMediaQuery 
} from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ 
      py: { xs: 4, md: 6 },
      bgcolor: 'grey.900', 
      color: 'white',
      borderTop: '1px solid',
      borderColor: 'grey.700'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              RB Classes
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Premier institute for NEET & JEE preparation in Gorakhpur since 2010.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <IconButton sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Link href="#hero" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Home
            </Link>
            <Link href="#facilities" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Facilities
            </Link>
            <Link href="#founder" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Founder
            </Link>
            <Link href="#faculty" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Faculty
            </Link>
            <Link href="#courses" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Courses
            </Link>
            <Link href="#results" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Results
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              More Links
            </Typography>
            <Link href="#testimonials" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Testimonials
            </Link>
            <Link href="#admission" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Admission
            </Link>
            <Link href="#contact" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Contact
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Study Material
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Test Series
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1 } }}>
              Video Lectures
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
              Doudpur, Gorakhpur
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
              Uttar Pradesh - 273008
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
              Phone: +91 98765 43210
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
              Email: info@rbclasses.com
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, borderColor: 'grey.700' }} />
        <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
          © {currentYear} RB Classes. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;