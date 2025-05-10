// // components/Courses.jsx
// import { 
//   Box, Container, Typography, Card, CardContent, 
//   CardMedia, Grid, Button, useMediaQuery 
// } from '@mui/material';

// const Courses = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');
  
//   const courses = [
//     {
//       name: 'NEET Foundation',
//       duration: '2 Years',
//       fee: '₹25,000/year',
//       discount: '10% off till June 30',
//       image: '/images/course1.jpg'
//     },
//     {
//       name: 'JEE Mains & Advanced',
//       duration: '2 Years',
//       fee: '₹30,000/year',
//       discount: '15% early bird discount',
//       image: '/images/course2.jpg'
//     },
//     {
//       name: 'NEET Crash Course',
//       duration: '6 Months',
//       fee: '₹15,000',
//       discount: '5% referral discount',
//       image: '/images/course3.jpg'
//     },
//   ];

//   return (
//     <Box id="courses" sx={{ 
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
//           Our Courses
//         </Typography>
//         <Grid container spacing={4}>
//           {courses.map((course, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card sx={{ 
//                 height: '100%', 
//                 display: 'flex', 
//                 flexDirection: 'column',
//                 bgcolor: 'rgba(255,255,255,0.1)',
//                 color: 'white',
//                 border: '1px solid rgba(255,255,255,0.2)'
//               }}>
//                 <CardMedia
//                   component="img"
//                   height="180"
//                   image={course.image}
//                   alt={course.name}
//                   sx={{ objectFit: 'cover' }}
//                 />
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography gutterBottom variant="h5" component="h3">
//                     {course.name}
//                   </Typography>
//                   <Typography mb={1}>
//                     Duration: {course.duration}
//                   </Typography>
//                   <Typography mb={1} color="primary.light" fontWeight="bold">
//                     Fee: {course.fee}
//                   </Typography>
//                   <Typography variant="body1" color="secondary.light">
//                     {course.discount}
//                   </Typography>
//                   <Button 
//                     variant="contained" 
//                     color="secondary" 
//                     sx={{ mt: 2 }}
//                     href="#admission"
//                     fullWidth
//                   >
//                     Enroll Now
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Courses;


// components/Courses.jsx
import { Box, Container, Typography, Card, CardContent, CardMedia, Grid, Button, useMediaQuery } from '@mui/material';

const Courses = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  const courses = [
    {
      name: 'NEET Foundation',
      duration: '2 Years',
      fee: '₹25,000/year',
      discount: '10% off till June 30',
      image: '/course1.jpg'
    },
    {
      name: 'JEE Mains & Advanced',
      duration: '2 Years',
      fee: '₹30,000/year',
      discount: '15% early bird discount',
      image: '/course2.jpeg'
    },
    {
      name: 'NEET Crash Course',
      duration: '6 Months',
      fee: '₹15,000',
      discount: '5% referral discount',
      image: '/courses.jpeg'
    },
  ];

  return (
    <Box id="courses" sx={{ 
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
          Our Courses
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const CourseCard = ({ course }) => (
  <Card sx={{ 
    width: '100%',
    maxWidth: 350,
    display: 'flex', 
    flexDirection: 'column',
    bgcolor: 'rgba(255,255,255,0.1)',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 2
  }}>
    <CardMedia
      component="img"
      height="180"
      image={course.image}
      alt={course.name}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
        {course.name}
      </Typography>
      <Typography mb={1}>Duration: {course.duration}</Typography>
      <Typography mb={1} color="primary.light" fontWeight="bold">
        Fee: {course.fee}
      </Typography>
      <Typography variant="body1" color="secondary.light">
        {course.discount}
      </Typography>
      <Button 
        variant="contained" 
        color="secondary" 
        sx={{ mt: 3 }}
        href="#admission"
        fullWidth
      >
        Enroll Now
      </Button>
    </CardContent>
  </Card>
);

export default Courses;