
// // components/Faculty.jsx
// import { 
//   Box, Container, Typography, Card, CardContent, 
//   CardMedia, useMediaQuery 
// } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Faculty = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const isTablet = useMediaQuery('(max-width:900px)');
  
//   const teachers = [
//     {
//       name: 'Dr. Rajesh Kumar',
//       subject: 'Physics (NEET/JEE)',
//       experience: '12+ years',
//       image: '/images/faculty1.jpg'
//     },
//     {
//       name: 'Prof. Sunita Sharma',
//       subject: 'Chemistry (NEET/JEE)',
//       experience: '10+ years',
//       image: '/images/faculty2.jpg'
//     },
//     {
//       name: 'Dr. Amit Patel',
//       subject: 'Mathematics (JEE)',
//       experience: '15+ years',
//       image: '/images/faculty3.jpg'
//     },
//     {
//       name: 'Dr. Priya Gupta',
//       subject: 'Biology (NEET)',
//       experience: '8+ years',
//       image: '/images/faculty4.jpg'
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
//     <Box id="faculty" sx={{ 
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
//           Our Expert Faculty
//         </Typography>
//         <Slider {...carouselSettings}>
//           {teachers.map((teacher, index) => (
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
//                   image={teacher.image}
//                   alt={teacher.name}
//                   sx={{ objectFit: 'cover' }}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {teacher.name}
//                   </Typography>
//                   <Typography variant="body1" sx={{ mb: 1 }}>
//                     {teacher.subject}
//                   </Typography>
//                   <Typography variant="body2">
//                     Experience: {teacher.experience}
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

// export default Faculty;


// components/Faculty.jsx
// import { Box, Container, Typography, useMediaQuery } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// const Faculty = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const isTablet = useMediaQuery('(max-width:900px)');
  
//   const teachers = [
//     {
//       name: 'Dr. Rajesh Kumar',
//       subject: 'Physics (NEET/JEE)',
//       experience: '12+ years',
//       image: '/faculty.png'
//     },
//     {
//       name: 'Prof. Sunita Sharma',
//       subject: 'Chemistry (NEET/JEE)',
//       experience: '10+ years',
//       image: '/faculty.png'
//     },
//     {
//       name: 'Surya Prakash Yadav',
//       subject: 'Mathematics (JEE)',
//       experience: '15+ years',
//       image: '/surya sir.jpg'
//     },
//     {
//       name: 'Dr. Priya Gupta',
//       subject: 'Biology (NEET)',
//       experience: '8+ years',
//       image: '/faculty.png'
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
//     <Box id="faculty" sx={{ 
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
//           Our Expert Faculty
//         </Typography>
        
//         <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
//           <Slider {...carouselSettings}>
//             {teachers.map((teacher, index) => (
//               <Box key={index} sx={{ px: 1 }}>
//                 <FacultyCard teacher={teacher} />
//               </Box>
//             ))}
//           </Slider>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Faculty;

// // components/FacultyCard.jsx
// import { Card, CardMedia, CardContent } from '@mui/material';

// const FacultyCard = ({ teacher }) => (
//   <Card sx={{ 
//     height: '100%',
//     bgcolor: 'rgba(255,255,255,0.1)',
//     color: 'white',
//     border: '1px solid rgba(255,255,255,0.2)',
//     borderRadius: 2
//   }}>
//     <CardMedia
//       component="img"
//       height="150"
//       image={teacher.image}
//       alt={teacher.name}
//       sx={{ objectFit: 'contain' }}
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
//         {teacher.name}
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 1 }}>
//         {teacher.subject}
//       </Typography>
//       <Typography variant="body2">
//         Experience: {teacher.experience}
//       </Typography>
//     </CardContent>
//   </Card>
// );



import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Faculty = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');
  
  const teachers = [
    {
      name: 'Dr. Rajesh Kumar',
      subject: 'Physics (NEET/JEE)',
      experience: '12+ years',
      image: '/faculty.png'
    },
    {
      name: 'Prof. Sunita Sharma',
      subject: 'Chemistry (NEET/JEE)',
      experience: '10+ years',
      image: '/faculty.png'
    },
    {
      name: 'Surya Prakash Yadav',
      subject: 'Mathematics (JEE)',
      experience: '15+ years',
      image: '/surya sir.jpg'
    },
    {
      name: 'Dr. Priya Gupta',
      subject: 'Biology (NEET)',
      experience: '8+ years',
      image: '/faculty.png'
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
    <Box id="faculty" sx={{ 
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
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            color: '#ffffff'
          }}
        >
          Our Expert Faculty
        </Typography>
        
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Slider {...carouselSettings}>
            {teachers.map((teacher, index) => (
              <Box key={index} sx={{ px: 1, height: '100%' }}>
                <FacultyCard teacher={teacher} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Faculty;

// components/FacultyCard.jsx
import { Card, CardMedia, CardContent, Avatar } from '@mui/material';

const FacultyCard = ({ teacher }) => (
  <Card sx={{ 
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: 'rgba(255,255,255,0.1)',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 2,
    p: 2
  }}>
    <Box sx={{ 
      display: 'flex',
      justifyContent: 'center',
      mb: 2
    }}>
      <Avatar
        src={teacher.image}
        alt={teacher.name}
        sx={{ 
          width: 150, 
          height: 150,
          border: '3px solid #1976d2'
        }}
      />
    </Box>
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {teacher.name}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, textAlign: 'center', color: '#4fc3f7' }}>
        {teacher.subject}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'center', color: '#b0bec5' }}>
        Experience: {teacher.experience}
      </Typography>
    </CardContent>
  </Card>
);