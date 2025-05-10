

// // components/StarPerformers.jsx
// import { 
//   Box, Container, Typography, Card, CardContent, 
//   CardMedia, useMediaQuery 
// } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const StarPerformers = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const isTablet = useMediaQuery('(max-width:900px)');
  
//   const starPerformers = [
//     {
//       name: 'Aarav Singh',
//       rank: 'NEET AIR 24',
//       image: '/images/student1.jpg',
//       quote: "RB Classes gave me the perfect guidance for NEET preparation."
//     },
//     {
//       name: 'Priya Verma',
//       rank: 'JEE Advanced AIR 42',
//       image: '/images/student2.jpg',
//       quote: "The faculty's teaching methodology helped me crack JEE."
//     },
//     {
//       name: 'Rahul Mehta',
//       rank: 'NEET AIR 56',
//       image: '/images/student3.jpg',
//       quote: "Regular tests and doubt sessions were extremely helpful."
//     },
//     {
//       name: 'Ananya Sharma',
//       rank: 'JEE Mains AIR 120',
//       image: '/images/student4.jpg',
//       quote: "The study material and mock tests were exam-oriented."
//     }
//   ];
  
//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     centerMode: true,
//     centerPadding: isMobile ? '20px' : '40px',
//   };

//   return (
//     <Box id="performers" sx={{ 
//       py: { xs: 4, md: 8 },
//       background: 'linear-gradient(135deg, #455a64 0%, #263238 100%)',
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
//           Our Star Performers
//         </Typography>
//         <Slider {...carouselSettings}>
//           {starPerformers.map((student, index) => (
//             <div key={index}>
//               <Card sx={{ 
//                 m: 1, 
//                 height: '100%',
//                 bgcolor: 'rgba(255,255,255,0.1)',
//                 color: 'white',
//                 border: '1px solid rgba(255,255,255,0.2)'
//               }}>
//                 <CardMedia
//                   component="img"
//                   height="250"
//                   image={student.image}
//                   alt={student.name}
//                   sx={{ objectFit: 'cover' }}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {student.name}
//                   </Typography>
//                   <Typography variant="body1" color="primary.light" sx={{ mb: 2 }}>
//                     {student.rank}
//                   </Typography>
//                   <Typography variant="body2" fontStyle="italic">
//                     "{student.quote}"
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
//         </Slider>
//       </Container>
//     </Box>
//   );
// };

// export default StarPerformers;




// // components/StarPerformers.jsx
// import { Box, Container, Typography, useMediaQuery } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// const StarPerformers = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const isTablet = useMediaQuery('(max-width:900px)');
  
//   const starPerformers = [
//     {
//       name: 'Aarav Singh',
//       rank: 'NEET AIR 24',
//       image: '/students.jpeg',
//       quote: "RB Classes gave me the perfect guidance for NEET preparation."
//     },
//     {
//       name: 'Priya Verma',
//       rank: 'JEE Advanced AIR 42',
//       image: '/students.jpeg',
//       quote: "The faculty's teaching methodology helped me crack JEE."
//     },
//     {
//       name: 'Rahul Mehta',
//       rank: 'NEET AIR 56',
//       image: '/students.jpeg',
//       quote: "Regular tests and doubt sessions were extremely helpful."
//     },
//     {
//       name: 'Ananya Sharma',
//       rank: 'JEE Mains AIR 120',
//       image: '/students.jpeg',
//       quote: "The study material and mock tests were exam-oriented."
//     }
//   ];
  
//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     centerMode: true,
//     centerPadding: isMobile ? '20px' : '40px',
//   };

//   return (
//     <Box id="performers" sx={{ 
//       py: 8,
//       pt:7,
//       background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
//       color: 'white',
//     }}>
//       <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
//         <Typography 
//           variant="h3" 
//           align="center" 
//           gutterBottom 
//           sx={{ 
//             fontWeight: 'bold', 
//             mb: 6,
//             textShadow: '0 2px 4px rgba(0,0,0,0.3)'
//           }}
//         >
//           Our Star Performers
//         </Typography>
        
//         <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
//           <Slider {...carouselSettings}>
//             {starPerformers.map((student, index) => (
//               <Box key={index} sx={{ px: 1 }}>
//                 <PerformerCard student={student} />
//               </Box>
//             ))}
//           </Slider>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default StarPerformers;

// // components/PerformerCard.jsx
// import { Card, CardMedia, CardContent} from '@mui/material';

// const PerformerCard = ({ student }) => (
//   <Card sx={{ 
//     height: '100%',
//     bgcolor: 'rgba(255,255,255,0.1)',
//     color: 'white',
//     border: '1px solid rgba(255,255,255,0.2)',
//     borderRadius: 2
//   }}>
//     <CardMedia
//       component="img"
//       height="300"
//       image={student.image}
//       alt={student.name}
//       sx={{ objectFit: 'cover' }}
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
//         {student.name}
//       </Typography>
//       <Typography variant="body1" color="primary.light" sx={{ mb: 2 }}>
//         {student.rank}
//       </Typography>
//       <Typography variant="body2" fontStyle="italic">
//         "{student.quote}"
//       </Typography>
//     </CardContent>
//   </Card>
// );



import { Box, Container, Typography, useMediaQuery, Avatar } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StarPerformers = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');
  
  const starPerformers = [
    {
      name: 'Aarav Singh',
      rank: 'NEET AIR 24',
      image: '/students.jpeg',
      quote: "RB Classes gave me the perfect guidance for NEET preparation."
    },
    {
      name: 'Priya Verma',
      rank: 'JEE Advanced AIR 42',
      image: '/students.jpeg',
      quote: "The faculty's teaching methodology helped me crack JEE."
    },
    {
      name: 'Rahul Mehta',
      rank: 'NEET AIR 56',
      image: '/students.jpeg',
      quote: "Regular tests and doubt sessions were extremely helpful."
    },
    {
      name: 'Ananya Sharma',
      rank: 'JEE Mains AIR 120',
      image: '/students.jpeg',
      quote: "The study material and mock tests were exam-oriented."
    }
  ];
  
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: isMobile ? '20px' : '40px',
  };

  return (
    <Box id="performers" sx={{ 
      py: 8,
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
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            color: '#ffffff'
          }}
        >
          Our Star Performers
        </Typography>
        
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Slider {...carouselSettings}>
            {starPerformers.map((student, index) => (
              <Box key={index} sx={{ px: 1, height: '100%' }}>
                <PerformerCard student={student} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default StarPerformers;

// components/PerformerCard.jsx
import { Card, CardContent} from '@mui/material';

const PerformerCard = ({ student }) => (
  <Card sx={{ 
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: 'rgba(255,255,255,0.1)',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 2,
    p: 3,
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
    }
  }}>
    <Box sx={{ 
      display: 'flex',
      justifyContent: 'center',
      mb: 3
    }}>
      <Avatar
        src={student.image}
        alt={student.name}
        sx={{ 
          width: 120, 
          height: 120,
          border: '3px solid #1976d2'
        }}
      />
    </Box>
    
    <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
        {student.name}
      </Typography>
      <Typography variant="body1" sx={{ 
        mb: 2, 
        color: '#4fc3f7',
        fontWeight: '500'
      }}>
        {student.rank}
      </Typography>
      <Typography variant="body1" fontStyle="italic" sx={{ 
        position: 'relative',
        '&:before, &:after': {
          content: '"\\201C"',
          fontSize: '2rem',
          color: 'rgba(255,255,255,0.2)',
          position: 'absolute'
        },
        '&:before': {
          top: -10,
          left: -15
        },
        '&:after': {
          content: '"\\201D"',
          bottom: -25,
          right: -15
        }
      }}>
        {student.quote}
      </Typography>
    </CardContent>
  </Card>
);