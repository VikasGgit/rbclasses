
// import {
//   Box,
//   Typography,
//   Button,
//   Container,
//   Paper,
//   useMediaQuery,
// } from '@mui/material';
// import { Phone, WhatsApp } from '@mui/icons-material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const HeroBanner = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const isTablet = useMediaQuery('(max-width:900px)');

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     centerMode: true,
//     centerPadding: isMobile ? '20px' : '40px',
//   };

//   const discounts = [
//     {
//       title: 'Early Bird Discount',
//       description: '15% off on all courses till June 30',
//       image: '/images/discount1.jpg',
//     },
//     {
//       title: 'Sibling Discount',
//       description: '10% additional discount for siblings',
//       image: '/images/discount2.jpg',
//     },
//     {
//       title: 'Scholarship Test',
//       description: 'Up to 50% scholarship available',
//       image: '/images/discount3.jpg',
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         background: 'linear-gradient(135deg, #616161 0%, #424242 100%)', // Gray gradient
//         color: 'white',
//         mt: { xs: 4, md: 8 },
//         py: { xs: 4, md: 8 },
//         textAlign: 'center',
//         width: '100%',
//       }}
//     >
//       <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
//         <Typography
//           variant={isMobile ? 'h4' : 'h3'}
//           component="h1"
//           gutterBottom
//           sx={{ 
//             fontWeight: 'bold',
//             lineHeight: 1.2,
//             mb: 2
//           }}
//         >
//           Premier Coaching for NEET & JEE in Gorakhpur
//         </Typography>
//         <Typography
//           variant={isMobile ? 'h6' : 'h5'}
//           component="h2"
//           gutterBottom
//           sx={{
//             mb: 4,
//             color: 'rgba(255,255,255,0.9)'
//           }}
//         >
//           Transforming Dreams into Reality Since 2010
//         </Typography>

//         {/* Call-to-action buttons */}
//         <Box
//           sx={{
//             mt: 4,
//             display: 'flex',
//             justifyContent: 'center',
//             gap: 2,
//             flexDirection: isMobile ? 'column' : 'row',
//             alignItems: 'center',
//             maxWidth: '500px',
//             mx: 'auto',
//             mb: 6
//           }}
//         >
//           <Button
//             variant="contained"
//             color="secondary"
//             size={isMobile ? 'medium' : 'large'}
//             startIcon={<Phone />}
//             href="tel:+919876543210"
//             sx={{ 
//               fontWeight: 'bold', 
//               width: isMobile ? '100%' : 'auto',
//               px: 4,
//               py: 1.5
//             }}
//           >
//             Call Now
//           </Button>
//           <Button
//             variant="contained"
//             size={isMobile ? 'medium' : 'large'}
//             startIcon={<WhatsApp />}
//             href="https://wa.me/919876543210"
//             sx={{
//               fontWeight: 'bold',
//               bgcolor: '#25D366',
//               '&:hover': { bgcolor: '#128C7E' },
//               width: isMobile ? '100%' : 'auto',
//               px: 4,
//               py: 1.5
//             }}
//           >
//             WhatsApp
//           </Button>
//         </Box>

//         {/* Discount Carousel with Images */}
//         <Box sx={{ 
//           mt: 6, 
//           maxWidth: '1200px', 
//           mx: 'auto',
//           px: { xs: 1, sm: 2 }
//         }}>
//           <Slider {...carouselSettings}>
//             {discounts.map((item, index) => (
//               <div key={index}>
//                 <Paper
//                   elevation={3}
//                   sx={{
//                     p: 2,
//                     m: 1,
//                     bgcolor: 'rgba(255,255,255,0.1)',
//                     textAlign: 'center',
//                     borderRadius: 2,
//                     color: 'white',
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column'
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src= "/logo.jpg"
//                     alt={item.title}
//                     sx={{
//                       width: '100%',
//                       height: 120,
//                       objectFit: 'cover',
//                       borderRadius: 2,
//                       mb: 2,
//                       mx: 'auto'
//                     }}
//                   />
//                   <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ flexGrow: 1 }}>
//                     {item.description}
//                   </Typography>
//                   <Button
//                     variant="outlined"
//                     size="small"
//                     color="secondary"
//                     sx={{ 
//                       mt: 2,
//                       color: 'white',
//                       borderColor: 'white',
//                       '&:hover': { borderColor: 'white' }
//                     }}
//                   >
//                     Learn More
//                   </Button>
//                 </Paper>
//               </div>
//             ))}
//           </Slider>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default HeroBanner;


// components/HeroBanner.jsx
// import { Box, Typography, Button, Container, Paper, useMediaQuery } from '@mui/material';
// import { Phone, WhatsApp } from '@mui/icons-material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const HeroBanner = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const isTablet = useMediaQuery('(max-width:900px)');

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     centerMode: true,
//     centerPadding: isMobile ? '20px' : '40px',
//   };

//   const discounts = [
//     {
//       title: 'Early Bird Discount',
//       description: '15% off on all courses till June 30',
//       image: '/course1.jpg',
//     },
//     {
//       title: 'Sibling Discount',
//       description: '10% additional discount for siblings',
//       image: '/course2.jpeg',
//     },
//     {
//       title: 'Scholarship Test',
//       description: 'Up to 50% scholarship available',
//       image: '/course1.jpg',
//     },
//   ];

//   return (
//     <Box id="hero" sx={{
//       background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
//       color: 'white',
//       mt:7,
//       py: 8,
//       textAlign: 'center',
//     }}>
//       <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
//         <Typography
//           variant={isMobile ? 'h3' : 'h2'}
//           component="h1"
//           gutterBottom
//           sx={{ 
//             fontWeight: 'bold',
//             lineHeight: 1.2,
//             mb: 3
//           }}
//         >
//           Premier Coaching for NEET & JEE in Gorakhpur
//         </Typography>
//         <Typography
//           variant={isMobile ? 'h5' : 'h4'}
//           component="h2"
//           gutterBottom
//           sx={{
//             mb: 5,
//             color: 'rgba(255,255,255,0.9)'
//           }}
//         >
//           Transforming Dreams into Reality Since 2010
//         </Typography>

//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             gap: 3,
//             flexDirection: isMobile ? 'column' : 'row',
//             alignItems: 'center',
//             maxWidth: 600,
//             mx: 'auto',
//             mb: 6
//           }}
//         >
//           <Button
//             variant="contained"
//             color="secondary"
//             size="large"
//             startIcon={<Phone />}
//             href="tel:+919876543210"
//             sx={{ 
//               fontWeight: 'bold',
//               px: 4,
//               py: 1.5,
//               fontSize: '1.1rem'
//             }}
//           >
//             Call Now
//           </Button>
//           <Button
//             variant="contained"
//             size="large"
//             startIcon={<WhatsApp />}
//             href="https://wa.me/919876543210"
//             sx={{
//               fontWeight: 'bold',
//               bgcolor: '#25D366',
//               '&:hover': { bgcolor: '#128C7E' },
//               px: 4,
//               py: 1.5,
//               fontSize: '1.1rem'
//             }}
//           >
//             WhatsApp
//           </Button>
//         </Box>

//         <Box sx={{ 
//           maxWidth: 1200, 
//           mx: 'auto',
//           px: { xs: 1, sm: 2 }
//         }}>
//           <Slider {...carouselSettings}>
//             {discounts.map((item, index) => (
//               <div key={index}>
//                 <DiscountCard item={item} />
//               </div>
//             ))}
//           </Slider>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// const DiscountCard = ({ item }) => (
//   <Paper
//     elevation={3}
//     sx={{
//       p: 3,
//       m: 1,
//       bgcolor: 'rgba(255,255,255,0.1)',
//       textAlign: 'center',
//       borderRadius: 2,
//       color: 'white',
//       height: '100%',
//       display: 'flex',
//       flexDirection: 'column'
//     }}
//   >
//     <Box
//       component="img"
//       src={item.image}
//       alt={item.title}
//       sx={{
//         width: '100%',
//         height: 120,
//         objectFit: 'contain',
//         mb: 2,
//         mx: 'auto'
//       }}
//     />
//     <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1.5 }}>
//       {item.title}
//     </Typography>
//     <Typography variant="body1" sx={{ mb: 2, flexGrow: 1 }}>
//       {item.description}
//     </Typography>
//     <Button
//       variant="outlined"
//       size="medium"
//       color="secondary"
//       sx={{ 
//         color: 'white',
//         borderColor: 'white',
//         '&:hover': { borderColor: 'white' }
//       }}
//     >
//       Learn More
//     </Button>
//   </Paper>
// );

// export default HeroBanner;


import { Box, Typography, Button, Container, Paper, useMediaQuery } from '@mui/material';
import { Phone, WhatsApp } from '@mui/icons-material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroBanner = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: isMobile ? '20px' : '40px',
  };

  const discounts = [
    {
      title: 'Early Bird Discount',
      description: '15% off on all courses till June 30',
      image: '/course1.jpg',
    },
    {
      title: 'Sibling Discount',
      description: '10% additional discount for siblings',
      image: '/course2.jpeg',
    },
    {
      title: 'Scholarship Test',
      description: 'Up to 50% scholarship available',
      image: '/course1.jpg',
    },
  ];

  return (
    <Box id="hero" sx={{
      background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
      color: 'white',
      mt: 7,
      py: 8,
      textAlign: 'center',
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          component="h1"
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            lineHeight: 1.2,
            mb: 3
          }}
        >
          Premier Coaching for NEET & JEE in Gorakhpur
        </Typography>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          component="h2"
          gutterBottom
          sx={{
            mb: 5,
            color: 'rgba(255,255,255,0.9)'
          }}
        >
          Transforming Dreams into Reality Since 2010
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            maxWidth: 600,
            mx: 'auto',
            mb: 6
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<Phone />}
            href="tel:+919876543210"
            sx={{ 
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem'
            }}
          >
            Call Now
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsApp />}
            href="https://wa.me/919876543210"
            sx={{
              fontWeight: 'bold',
              bgcolor: '#25D366',
              '&:hover': { bgcolor: '#128C7E' },
              px: 4,
              py: 1.5,
              fontSize: '1.1rem'
            }}
          >
            WhatsApp
          </Button>
        </Box>

        <Box sx={{ 
          maxWidth: 1200, 
          mx: 'auto',
          px: { xs: 1, sm: 2 }
        }}>
          <Slider {...carouselSettings}>
            {discounts.map((item, index) => (
              <div key={index}>
                <DiscountCard item={item} />
              </div>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

const DiscountCard = ({ item }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      m: 1,
      bgcolor: 'rgba(255,255,255,0.1)',
      textAlign: 'center',
      borderRadius: 2,
      color: 'white',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <Box
      component="img"
      src={item.image}
      alt={item.title}
      sx={{
        width: '100%',
        height: 180,  
        objectFit: 'cover', 
        mb: 3,
        mx: 'auto',
        borderRadius: 1 
      }}
    />
    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}> 
      {item.title}
    </Typography>
    <Typography variant="body1" sx={{ mb: 3, flexGrow: 1 }}>
      {item.description}
    </Typography>
    <Button
      variant="outlined"
      size="medium"
      color="secondary"
      sx={{ 
        color: 'white',
        borderColor: 'white',
        '&:hover': { borderColor: 'white' },
        px: 3  // Added horizontal padding
      }}
    >
      Learn More
    </Button>
  </Paper>
);

export default HeroBanner;