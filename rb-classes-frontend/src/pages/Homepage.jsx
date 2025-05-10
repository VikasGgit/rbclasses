// // src/App.tsx
// import { useState } from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   useMediaQuery,
//   Box,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Paper,
//   TextField,
//   MenuItem
//   ,
//   Divider
// } from '@mui/material';
// import { Brightness4, Brightness7, Phone, WhatsApp, YouTube, Facebook, Instagram } from '@mui/icons-material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const HomePage = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//   const isMobile = useMediaQuery('(max-width:600px)');

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//       primary: {
//         main: '#1976d2',
//       },
//       secondary: {
//         main: '#9c27b0',
//       },
//       background: {
//         default: darkMode ? '#121212' : '#f5f5f5',
//         paper: darkMode ? '#1e1e1e' : '#ffffff',
//       },
//     },
//   });

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   // Sample data
//   const teachers = [
//     {
//       name: 'Dr. Rajesh Kumar',
//       subject: 'Physics (NEET/JEE)',
//       experience: '12+ years',
//       image: '/teacher1.jpg'
//     },
//     {
//       name: 'Prof. Sunita Sharma',
//       subject: 'Chemistry (NEET/JEE)',
//       experience: '10+ years',
//       image: '/teacher2.jpg'
//     },
//     {
//       name: 'Dr. Amit Patel',
//       subject: 'Mathematics (JEE)',
//       experience: '15+ years',
//       image: '/teacher3.jpg'
//     },
//   ];

//   const starPerformers = [
//     {
//       name: 'Aarav Singh',
//       rank: 'NEET AIR 24',
//       image: '/student1.jpg'
//     },
//     {
//       name: 'Priya Verma',
//       rank: 'JEE Advanced AIR 42',
//       image: '/student2.jpg'
//     },
//     {
//       name: 'Rahul Mehta',
//       rank: 'NEET AIR 56',
//       image: '/student3.jpg'
//     },
//   ];

//   const courses = [
//     {
//       name: 'NEET Foundation',
//       duration: '2 Years',
//       fee: '₹25,000/year',
//       discount: '10% off till June 30'
//     },
//     {
//       name: 'JEE Mains & Advanced',
//       duration: '2 Years',
//       fee: '₹30,000/year',
//       discount: '15% early bird discount'
//     },
//     {
//       name: 'NEET Crash Course',
//       duration: '6 Months',
//       fee: '₹15,000',
//       discount: '5% referral discount'
//     },
//   ];

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: isMobile ? 1 : 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <div className="min-h-screen flex flex-col">
//         {/* Navbar */}
//         <AppBar position="static" color="primary" elevation={0}>
//           <Container maxWidth="lg">
//             <Toolbar>
//               <Box className="rounded-4xl" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//                 <img 
//                   src="/logo.jpg" 
//                   alt="RB Classes Logo" 
//                   style={{ height: '50px', marginRight: '16px' }} 
//                 />
//                 <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
//                   RB Classes
//                 </Typography>
//               </Box>

//               <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
//                 <Button color="inherit" href="#courses">Courses</Button>
//                 <Button color="inherit" href="#admission">Admission</Button>
//                 <Button color="inherit" href="#performers">Top Performers</Button>
//                 <Button color="inherit" href="#faculty">Faculty</Button>
//                 <Button color="inherit" href="#contact">Contact</Button>
//               </Box>

//               <IconButton color="inherit" onClick={toggleDarkMode}>
//                 {darkMode ? <Brightness7 /> : <Brightness4 />}
//               </IconButton>
//             </Toolbar>
//           </Container>
//         </AppBar>

//         {/* Hero Banner */}
//         <Box 
//           sx={{ 
//             background: 'linear-gradient(135deg, #1976d2 0%, #004ba0 100%)',
//             color: 'white',
//             py: 8,
//             textAlign: 'center'
//           }}
//         >
//           <Container maxWidth="lg">
//             <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Premier Coaching for NEET & JEE in Gorakhpur
//             </Typography>
//             <Typography variant="h5" component="h2" gutterBottom>
//               Transforming Dreams into Reality Since 2010
//             </Typography>
//             <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
//               <Button 
//                 variant="contained" 
//                 color="secondary" 
//                 size="large"
//                 startIcon={<Phone />}
//                 href="tel:+919876543210"
//                 sx={{ fontWeight: 'bold' }}
//               >
//                 Call Now
//               </Button>
//               <Button 
//                 variant="contained" 
//                 color="success" 
//                 size="large"
//                 startIcon={<WhatsApp />}
//                 href="https://wa.me/919876543210"
//                 sx={{ fontWeight: 'bold', bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' } }}
//               >
//                 WhatsApp
//               </Button>
//             </Box>

//             {/* Discount Carousel */}
//             <Box sx={{ mt: 6, maxWidth: '800px', mx: 'auto' }}>
//               <Slider {...carouselSettings}>
//                 <div>
//                   <Paper elevation={3} sx={{ p: 2, m: 1, bgcolor: 'rgba(255,255,255,0.1)' }}>
//                     <Typography variant="h6">Early Bird Discount</Typography>
//                     <Typography>15% off on all courses till June 30</Typography>
//                   </Paper>
//                 </div>
//                 <div>
//                   <Paper elevation={3} sx={{ p: 2, m: 1, bgcolor: 'rgba(255,255,255,0.1)' }}>
//                     <Typography variant="h6">Sibling Discount</Typography>
//                     <Typography>10% additional discount for siblings</Typography>
//                   </Paper>
//                 </div>
//                 <div>
//                   <Paper elevation={3} sx={{ p: 2, m: 1, bgcolor: 'rgba(255,255,255,0.1)' }}>
//                     <Typography variant="h6">Scholarship Test</Typography>
//                     <Typography>Up to 50% scholarship available</Typography>
//                   </Paper>
//                 </div>
//               </Slider>
//             </Box>
//           </Container>
//         </Box>

//         {/* Faculty Section */}
//         <Box id="faculty" sx={{ py: 8, bgcolor: 'background.paper' }}>
//           <Container maxWidth="lg">
//             <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Our Expert Faculty
//             </Typography>
//             <Slider {...carouselSettings}>
//               {teachers.map((teacher, index) => (
//                 <div key={index}>
//                   <Card sx={{ maxWidth: 345, m: 2 }}>
//                     <CardMedia
//                       component="img"
//                       height="200"
//                       image={teacher.image}
//                       alt={teacher.name}
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         {teacher.name}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {teacher.subject}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Experience: {teacher.experience}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </div>
//               ))}
//             </Slider>
//           </Container>
//         </Box>

//         {/* Star Performers */}
//         <Box id="performers" sx={{ py: 8, bgcolor: 'background.default' }}>
//           <Container maxWidth="lg">
//             <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Our Star Performers
//             </Typography>
//             <Slider {...carouselSettings}>
//               {starPerformers.map((student, index) => (
//                 <div key={index}>
//                   <Card sx={{ maxWidth: 345, m: 2 }}>
//                     <CardMedia
//                       component="img"
//                       height="200"
//                       image={student.image}
//                       alt={student.name}
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         {student.name}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {student.rank}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </div>
//               ))}
//             </Slider>
//           </Container>
//         </Box>

//         {/* Courses Section */}
//         <Box id="courses" sx={{ py: 8, bgcolor: 'background.paper' }}>
//           <Container maxWidth="lg">
//             <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Our Courses
//             </Typography>
//             <Grid container spacing={4}>
//               {courses.map((course, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                   <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//                     <CardContent sx={{ flexGrow: 1 }}>
//                       <Typography gutterBottom variant="h5" component="h3">
//                         {course.name}
//                       </Typography>
//                       <Typography mb={2}>
//                         Duration: {course.duration}
//                       </Typography>
//                       <Typography mb={2} color="primary.main" fontWeight="bold">
//                         Fee: {course.fee}
//                       </Typography>
//                       <Typography variant="body2" color="secondary.main">
//                         {course.discount}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </Box>

//         {/* Admission Form */}
//         <Box id="admission" sx={{ py: 8, bgcolor: 'background.default' }}>
//           <Container maxWidth="md">
//             <Paper elevation={3} sx={{ p: 4 }}>
//               <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
//                 Admission Enquiry
//               </Typography>
//               <form>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label="Student Name" variant="outlined" required />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label="Parent Name" variant="outlined" required />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label="Email" type="email" variant="outlined" required />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label="Phone" type="tel" variant="outlined" required />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField fullWidth label="Address" variant="outlined" multiline rows={3} required />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Interested Course"
//                       select
//                       variant="outlined"
//                       required
//                     >
//                       {courses.map((course) => (
//                         <MenuItem key={course.name} value={course.name}>
//                           {course.name}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
//                       Submit Enquiry
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Paper>
//           </Container>
//         </Box>

//         {/* Map and Contact */}
//         <Box id="contact" sx={{ py: 8, bgcolor: 'background.paper' }}>
//           <Container maxWidth="lg">
//             <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Visit Us
//             </Typography>
//             <Grid container spacing={4}>
//               <Grid item xs={12} md={6}>
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.109259714155!2d83.37281431504274!3d26.84141508316175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991b7a9a7e0e9a5%3A0x9e9a9a9a9a9a9a9a!2sDoudpur%2C%20Gorakhpur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
//                   width="100%"
//                   height="400"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                 ></iframe>
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography variant="h5" gutterBottom>
//                   RB Classes
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   Doudpur, Gorakhpur, Uttar Pradesh - 273008
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   <strong>Phone:</strong> +91 98765 43210
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   <strong>Email:</strong> info@rbclasses.com
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   <strong>Hours:</strong> Monday-Saturday: 8AM - 8PM
//                 </Typography>
//                 <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
//                   <Button 
//                     variant="contained" 
//                     startIcon={<Phone />}
//                     href="tel:+919876543210"
//                   >
//                     Call Us
//                   </Button>
//                   <Button 
//                     variant="contained" 
//                     color="success"
//                     startIcon={<WhatsApp />}
//                     href="https://wa.me/919876543210"
//                     sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' } }}
//                   >
//                     WhatsApp
//                   </Button>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>

//         {/* Footer */}
//         <Box component="footer" sx={{ py: 6, bgcolor: 'primary.main', color: 'white' }}>
//           <Container maxWidth="lg">
//             <Grid container spacing={4}>
//               <Grid item xs={12} sm={6} md={3}>
//                 <Typography variant="h6" gutterBottom>
//                   RB Classes
//                 </Typography>
//                 <Typography>
//                   Premier coaching institute for NEET & JEE in Gorakhpur
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <Typography variant="h6" gutterBottom>
//                   Quick Links
//                 </Typography>
//                 <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
//                   <li><a href="#courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</a></li>
//                   <li><a href="#faculty" style={{ color: 'white', textDecoration: 'none' }}>Faculty</a></li>
//                   <li><a href="#performers" style={{ color: 'white', textDecoration: 'none' }}>Results</a></li>
//                   <li><a href="#admission" style={{ color: 'white', textDecoration: 'none' }}>Admission</a></li>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <Typography variant="h6" gutterBottom>
//                   Contact
//                 </Typography>
//                 <Typography>Doudpur, Gorakhpur</Typography>
//                 <Typography>Uttar Pradesh - 273008</Typography>
//                 <Typography>Phone: +91 98765 43210</Typography>
//                 <Typography>Email: info@rbclasses.com</Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <Typography variant="h6" gutterBottom>
//                   Follow Us
//                 </Typography>
//                 <Box sx={{ display: 'flex', gap: 2 }}>
//                   <IconButton color="inherit" href="https://facebook.com/rbclasses" target="_blank">
//                     <Facebook />
//                   </IconButton>
//                   <IconButton color="inherit" href="https://instagram.com/rbclasses" target="_blank">
//                     <Instagram />
//                   </IconButton>
//                   <IconButton color="inherit" href="https://youtube.com/rbclasses" target="_blank">
//                     <YouTube />
//                   </IconButton>
//                 </Box>
//               </Grid>
//             </Grid>
//             <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />
//             <Typography align="center">
//               © {new Date().getFullYear()} RB Classes. All rights reserved.
//             </Typography>
//           </Container>
//         </Box>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default HomePage;


import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Divider,
  TextField,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { 
  Brightness4, 
  Brightness7, 
  Phone, 
  WhatsApp,
  Facebook,
  Instagram,
  YouTube,
  Menu
} from '@mui/icons-material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Components
const Navbar = ({ darkMode, toggleDarkMode, isMobile }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Courses', href: '#courses' },
    { text: 'Admission', href: '#admission' },
    { text: 'Top Performers', href: '#performers' },
    { text: 'Faculty', href: '#faculty' },
    { text: 'Contact', href: '#contact' }
  ];

  return (
    <AppBar position="fixed" color="primary" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img 
              src="/logo.png" 
              alt="RB Classes Logo" 
              style={{ height: '40px', marginRight: '12px' }} 
            />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              RB Classes
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={toggleDarkMode}>
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map((item) => (
                <Button 
                  key={item.text} 
                  color="inherit" 
                  href={item.href}
                  sx={{ fontWeight: 'medium' }}
                >
                  {item.text}
                </Button>
              ))}
              <IconButton color="inherit" onClick={toggleDarkMode}>
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem 
                button 
                key={item.text}
                component="a"
                href={item.href}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

const HeroSection = ({ isMobile }) => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(135deg, #1976d2 0%, #004ba0 100%)',
        color: 'white',
        pt: 12,
        pb: 8,
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Premier Coaching for NEET & JEE
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Transforming Dreams into Reality Since 2010
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            startIcon={<Phone />}
            href="tel:+919876543210"
            sx={{ fontWeight: 'bold' }}
          >
            Call Now
          </Button>
          <Button 
            variant="contained" 
            color="success" 
            size="large"
            startIcon={<WhatsApp />}
            href="https://wa.me/919876543210"
            sx={{ fontWeight: 'bold', bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' } }}
          >
            WhatsApp
          </Button>
        </Box>

        {/* Discount Carousel */}
        <Box sx={{ mt: 6, maxWidth: '800px', mx: 'auto' }}>
          <Slider {...carouselSettings}>
            <div>
              <Paper elevation={3} sx={{ p: 2, m: 1, bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Typography variant="h6">Early Bird Discount</Typography>
                <Typography>15% off on all courses till June 30</Typography>
              </Paper>
            </div>
            <div>
              <Paper elevation={3} sx={{ p: 2, m: 1, bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Typography variant="h6">Sibling Discount</Typography>
                <Typography>10% additional discount for siblings</Typography>
              </Paper>
            </div>
            <div>
              <Paper elevation={3} sx={{ p: 2, m: 1, bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Typography variant="h6">Scholarship Test</Typography>
                <Typography>Up to 50% scholarship available</Typography>
              </Paper>
            </div>
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

const FacultySection = ({ isMobile }) => {
  const teachers = [
    {
      name: 'Dr. Rajesh Kumar',
      subject: 'Physics (NEET/JEE)',
      experience: '12+ years',
      image: '/teacher1.jpg'
    },
    {
      name: 'Prof. Sunita Sharma',
      subject: 'Chemistry (NEET/JEE)',
      experience: '10+ years',
      image: '/teacher2.jpg'
    },
    {
      name: 'Dr. Amit Patel',
      subject: 'Mathematics (JEE)',
      experience: '15+ years',
      image: '/teacher3.jpg'
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box id="faculty" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Our Expert Faculty
        </Typography>
        <Slider {...carouselSettings}>
          {teachers.map((teacher, index) => (
            <div key={index}>
              <Card sx={{ maxWidth: 345, m: 2, height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={teacher.image}
                  alt={teacher.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {teacher.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {teacher.subject}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Experience: {teacher.experience}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

const PerformersSection = ({ isMobile }) => {
  const starPerformers = [
    {
      name: 'Aarav Singh',
      rank: 'NEET AIR 24',
      image: '/student1.jpg'
    },
    {
      name: 'Priya Verma',
      rank: 'JEE Advanced AIR 42',
      image: '/student2.jpg'
    },
    {
      name: 'Rahul Mehta',
      rank: 'NEET AIR 56',
      image: '/student3.jpg'
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box id="performers" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Our Star Performers
        </Typography>
        <Slider {...carouselSettings}>
          {starPerformers.map((student, index) => (
            <div key={index}>
              <Card sx={{ maxWidth: 345, m: 2, height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={student.image}
                  alt={student.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {student.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {student.rank}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

const CoursesSection = ({isMobile}) => {
  const courses = [
    {
      name: 'NEET Foundation',
      duration: '2 Years',
      fee: '₹25,000/year',
      discount: '10% off till June 30'
    },
    {
      name: 'JEE Mains & Advanced',
      duration: '2 Years',
      fee: '₹30,000/year',
      discount: '15% early bird discount'
    },
    {
      name: 'NEET Crash Course',
      duration: '6 Months',
      fee: '₹15,000',
      discount: '5% referral discount'
    },
  ];

  return (
    <Box id="courses" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Our Courses
        </Typography>
        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3
                }
              }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {course.name}
                  </Typography>
                  <Typography mb={2}>
                    Duration: {course.duration}
                  </Typography>
                  <Typography mb={2} color="primary.main" fontWeight="bold">
                    Fee: {course.fee}
                  </Typography>
                  <Typography variant="body2" color="secondary.main">
                    {course.discount}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const AdmissionSection = ({isMobile}) => {
  const courses = [
    { name: 'NEET Foundation' },
    { name: 'JEE Mains & Advanced' },
    { name: 'NEET Crash Course' },
  ];

  return (
    <Box id="admission" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
            Admission Enquiry
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Student Name" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Parent Name" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" type="email" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone" type="tel" variant="outlined" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Address" variant="outlined" multiline rows={3} required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Interested Course"
                  select
                  variant="outlined"
                  required
                >
                  {courses.map((course) => (
                    <MenuItem key={course.name} value={course.name}>
                      {course.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  size="large" 
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  Submit Enquiry
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

const ContactSection = ({isMobile}) => {
  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Visit Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.109259714155!2d83.37281431504274!3d26.84141508316175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991b7a9a7e0e9a5%3A0x9e9a9a9a9a9a9a9a!2sDoudpur%2C%20Gorakhpur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              RB Classes
            </Typography>
            <Typography variant="body1" gutterBottom>
              Doudpur, Gorakhpur, Uttar Pradesh - 273008
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Phone:</strong> +91 98765 43210
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Email:</strong> info@rbclasses.com
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Hours:</strong> Monday-Saturday: 8AM - 8PM
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                startIcon={<Phone />}
                href="tel:+919876543210"
                sx={{ flex: isMobile ? '1 0 100%' : 'none' }}
              >
                Call Us
              </Button>
              <Button 
                variant="contained" 
                color="success"
                startIcon={<WhatsApp />}
                href="https://wa.me/919876543210"
                sx={{ 
                  bgcolor: '#25D366', 
                  '&:hover': { bgcolor: '#128C7E' },
                  flex: isMobile ? '1 0 100%' : 'none'
                }}
              >
                WhatsApp
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const Footer = ({isMobile}) => {
  return (
    <Box component="footer" sx={{ py: 6, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              RB Classes
            </Typography>
            <Typography>
              Premier coaching institute for NEET & JEE in Gorakhpur
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              <li><a href="#courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</a></li>
              <li><a href="#faculty" style={{ color: 'white', textDecoration: 'none' }}>Faculty</a></li>
              <li><a href="#performers" style={{ color: 'white', textDecoration: 'none' }}>Results</a></li>
              <li><a href="#admission" style={{ color: 'white', textDecoration: 'none' }}>Admission</a></li>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact
            </Typography>
            <Typography>Doudpur, Gorakhpur</Typography>
            <Typography>Uttar Pradesh - 273008</Typography>
            <Typography>Phone: +91 98765 43210</Typography>
            <Typography>Email: info@rbclasses.com</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" href="https://facebook.com/rbclasses" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com/rbclasses" target="_blank">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" href="https://youtube.com/rbclasses" target="_blank">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />
        <Typography align="center">
          © {new Date().getFullYear()} RB Classes. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

// Main App Component
const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isMobile = useMediaQuery('(max-width:600px)');

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#9c27b0',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: isMobile ? '2rem' : '3rem',
      },
      h2: {
        fontSize: isMobile ? '1.75rem' : '2.5rem',
      },
      h3: {
        fontSize: isMobile ? '1.5rem' : '2rem',
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isMobile={isMobile} />
        <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
          <HeroSection isMobile={isMobile} />
          <FacultySection isMobile={isMobile} />
          <PerformersSection isMobile={isMobile} />
          <CoursesSection isMobile={isMobile}/>
          <AdmissionSection isMobile={isMobile} />
          <ContactSection isMobile={isMobile} />
        </Box>
        <Footer isMobile={isMobile} />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;