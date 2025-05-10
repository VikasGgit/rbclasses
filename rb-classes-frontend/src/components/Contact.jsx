// // components/Contact.jsx
// import { 
//   Box, Container, Typography, Grid, Button, Paper, useMediaQuery 
// } from '@mui/material';
// import { Phone, WhatsApp, Email, LocationOn, AccessTime } from '@mui/icons-material';

// const Contact = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');

//   return (
//     <Box id="contact" sx={{ 
//       py: { xs: 4, md: 8 },
//       background: 'linear-gradient(135deg, #616161 0%, #424242 100%)',
//       color: 'white',
//     }}>
//       <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
//         <Typography 
//           variant="h4" 
//           component="h2" 
//           align="center" 
//           gutterBottom 
//           sx={{ 
//             fontWeight: 'bold', 
//             mb: 4,
//             textShadow: '0 2px 4px rgba(0,0,0,0.3)'
//           }}
//         >
//           Visit Us
//         </Typography>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <Paper elevation={3} sx={{ height: '100%', overflow: 'hidden' }}>
//               <iframe
//                 src="https://www.google.com/maps/place/26%C2%B044'14.8%22N+83%C2%B022'18.8%22E/@26.7374458,83.3718796,17z/data=!3m1!4b1!4m4!3m3!8m2!3d26.7374458!4d83.3718796?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
//                 width="100%"
//                 height="400"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//               ></iframe>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Paper elevation={3} sx={{ 
//               p: 3, 
//               height: '100%',
//               bgcolor: 'rgba(255,255,255,0.1)',
//               color: 'white',
//               border: '1px solid rgba(255,255,255,0.2)'
//             }}>
//               <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
//                 RB Classes
//               </Typography>
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                 <LocationOn color="secondary" sx={{ mr: 2 }} />
//                 <Typography variant="body1">
//                   Doudpur, Gorakhpur, Uttar Pradesh - 273008
//                 </Typography>
//               </Box>
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                 <Phone color="secondary" sx={{ mr: 2 }} />
//                 <Typography variant="body1">
//                   +91 98765 43210
//                 </Typography>
//               </Box>
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                 <Email color="secondary" sx={{ mr: 2 }} />
//                 <Typography variant="body1">
//                   info@rbclasses.com
//                 </Typography>
//               </Box>
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//                 <AccessTime color="secondary" sx={{ mr: 2 }} />
//                 <Typography variant="body1">
//                   Monday-Saturday: 8AM - 8PM
//                 </Typography>
//               </Box>
//               <Box sx={{ 
//                 mt: 3, 
//                 display: 'flex', 
//                 gap: 2,
//                 flexDirection: isMobile ? 'column' : 'row'
//               }}>
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Phone />}
//                   href="tel:+919876543210"
//                   fullWidth={isMobile}
//                 >
//                   Call Us
//                 </Button>
//                 <Button 
//                   variant="contained" 
//                   color="success"
//                   startIcon={<WhatsApp />}
//                   href="https://wa.me/919876543210"
//                   sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' } }}
//                   fullWidth={isMobile}
//                 >
//                   WhatsApp
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Contact;


// components/Contact.jsx
import { Box, Container, Typography, Grid, Button, Paper, useMediaQuery } from '@mui/material';
import { Phone, WhatsApp, Email, LocationOn, AccessTime } from '@mui/icons-material';

const Contact = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box id="contact" sx={{ 
      py: 8,
      pt:7,
      background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
      color: 'white',
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            mb: 6,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          Visit Us
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ 
              height: '100%',
              overflow: 'hidden',
              borderRadius: 2
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.109259714155!2d83.37281431504274!3d26.84141508316175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991b7a9a7e0e9a5%3A0x9e9a9a9a9a9a9a9a!2sDoudpur%2C%20Gorakhpur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ 
              p: 4, 
              height: '100%',
              bgcolor: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 2
            }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                RB Classes
              </Typography>
              
              <ContactItem icon={<LocationOn color="secondary" />} text="Doudpur, Gorakhpur, Uttar Pradesh - 273008" />
              <ContactItem icon={<Phone color="secondary" />} text="+91 98765 43210" />
              <ContactItem icon={<Email color="secondary" />} text="info@rbclasses.com" />
              <ContactItem icon={<AccessTime color="secondary" />} text="Monday-Saturday: 8AM - 8PM" />
              
              <Box sx={{ 
                mt: 4, 
                display: 'flex', 
                gap: 2,
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'center'
              }}>
                <ContactButton 
                  icon={<Phone />} 
                  text="Call Us" 
                  href="tel:+919876543210" 
                  color="secondary"
                />
                <ContactButton 
                  icon={<WhatsApp />} 
                  text="WhatsApp" 
                  href="https://wa.me/919876543210" 
                  color="#25D366"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const ContactItem = ({ icon, text }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
    <Box sx={{ mr: 2 }}>{icon}</Box>
    <Typography variant="body1">{text}</Typography>
  </Box>
);

const ContactButton = ({ icon, text, href, color }) => (
  <Button
    variant="contained"
    startIcon={icon}
    href={href}
    fullWidth
    sx={{ 
      bgcolor: color,
      '&:hover': { bgcolor: color, opacity: 0.9 },
      px: 4,
      py: 1.5
    }}
  >
    {text}
  </Button>
);

export default Contact;