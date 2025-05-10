// // components/Testimonials.jsx
// import { Box, Container, Typography, Avatar, useMediaQuery, Paper } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import QuoteIcon from '@mui/icons-material/FormatQuote';

// const Testimonials = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');

//   const testimonials = [
//     {
//       name: "Aarav Singh",
//       rank: "NEET AIR 24 (2023)",
//       batch: "2-Year Classroom Program (2021-23)",
//       message: "RB Classes' doubt sessions and test series mirrored actual NEET difficulty. My physics improved from 120 to 180 marks!",
//       photo: "/student1.jpg"
//     },
//     {
//       name: "Priya Verma",
//       rank: "JEE Advanced AIR 42 (2023)",
//       batch: "Crash Course (2023)",
//       message: "The faculty's shortcut techniques helped me solve problems 3x faster. Best decision to join RB!",
//       photo: "/student2.jpg"
//     },
//     {
//       name: "Rahul Mehta",
//       rank: "NEET AIR 56 (2022)",
//       batch: "1-Year Program (2021-22)",
//       message: "Personalized attention in small batches made all the difference. Thank you RB team!",
//       photo: "/student3.jpg"
//     }
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: isMobile ? 1 : 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//   };

//   return (
//     <Box id="testimonials" sx={{ 
//       py: { xs: 4, md: 8 },
//       background: 'linear-gradient(135deg, #455a64 0%, #263238 100%)',
//       color: 'white',
//     }}>
//       <Container maxWidth="lg">
//         <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
//           Student Success Stories
//         </Typography>
        
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <Box key={index} sx={{ px: 2 }}>
//               <Paper elevation={3} sx={{ 
//                 p: 4,
//                 bgcolor: 'rgba(25, 118, 210, 0.1)',
//                 border: '1px solid rgba(255,255,255,0.2)',
//                 height: '100%'
//               }}>
//                 <QuoteIcon sx={{ 
//                   fontSize: 40, 
//                   color: 'primary.main',
//                   opacity: 0.3,
//                   mb: 2 
//                 }} />
//                 <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
//                   "{testimonial.message}"
//                 </Typography>
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <Avatar 
//                     src={testimonial.photo} 
//                     alt={testimonial.name}
//                     sx={{ width: 60, height: 60, mr: 2 }}
//                   />
//                   <Box>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                       {testimonial.name}
//                     </Typography>
//                     <Typography variant="body2" color="primary.light">
//                       {testimonial.rank}
//                     </Typography>
//                     <Typography variant="body2">
//                       {testimonial.batch}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Paper>
//             </Box>
//           ))}
//         </Slider>
//       </Container>
//     </Box>
//   );
// };

// export default Testimonials;


// components/Testimonials.jsx
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Testimonials = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const testimonials = [
    {
      name: "Aarav Singh",
      rank: "NEET AIR 24 (2023)",
      batch: "2-Year Classroom Program (2021-23)",
      message: "RB Classes' doubt sessions and test series mirrored actual NEET difficulty. My physics improved from 120 to 180 marks!",
      photo: "/student1.jpg"
    },
    {
      name: "Priya Verma",
      rank: "JEE Advanced AIR 42 (2023)",
      batch: "Crash Course (2023)",
      message: "The faculty's shortcut techniques helped me solve problems 3x faster. Best decision to join RB!",
      photo: "/student2.jpg"
    },
    {
      name: "Rahul Mehta",
      rank: "NEET AIR 56 (2022)",
      batch: "1-Year Program (2021-22)",
      message: "Personalized attention in small batches made all the difference. Thank you RB team!",
      photo: "/student3.jpg"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box id="testimonials" sx={{ 
      py: 8,
      background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
      color: 'white',
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ 
          fontWeight: 'bold', 
          mb: 6,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Student Success Stories
        </Typography>
        
        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <TestimonialCard testimonial={testimonial} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;

// components/TestimonialCard.jsx
import { Paper,  Avatar } from '@mui/material';
import QuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialCard = ({ testimonial }) => (
  <Paper elevation={3} sx={{ 
    pt: 4,
    height: '100%',
    bgcolor: 'rgba(25, 118, 210, 0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 2
  }}>
    <QuoteIcon sx={{ 
      fontSize: 40, 
      color: 'primary.main',
      opacity: 0.3,
      mb: 2 
    }} />
    <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
      "{testimonial.message}"
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar 
        src={testimonial.photo} 
        alt={testimonial.name}
        sx={{ width: 60, height: 60, mr: 2 }}
      />
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {testimonial.name}
        </Typography>
        <Typography variant="body2" color="primary.light">
          {testimonial.rank}
        </Typography>
        <Typography variant="body2">
          {testimonial.batch}
        </Typography>
      </Box>
    </Box>
  </Paper>
);

