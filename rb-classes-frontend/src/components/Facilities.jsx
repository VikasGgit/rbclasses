// // components/Facilities.jsx
// import { Box, Container, Typography, Grid, Card, CardMedia, useMediaQuery } from '@mui/material';
// import { Class, Science, Wifi, LibraryBooks } from '@mui/icons-material';

// const Facilities = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');

//   const facilities = [
//     {
//       title: "Smart Classrooms",
//       description: "Digitally equipped with interactive whiteboards and projectors",
//       icon: <Class fontSize="large" />,
//       image: "/classroom.jpg"
//     },
//     {
//       title: "Advanced Labs",
//       description: "Physics/Chemistry/Biology labs with modern equipment",
//       icon: <Science fontSize="large" />,
//       image: "/lab.jpg"
//     },
//     {
//       title: "Digital Library",
//       description: "5000+ reference books and online journals access",
//       icon: <LibraryBooks fontSize="large" />,
//       image: "/library.jpg"
//     },
//     {
//       title: "Wi-Fi Campus",
//       description: "High-speed internet for online resources access",
//       icon: <Wifi fontSize="large" />,
//       image: "/campus.jpg"
//     }
//   ];

//   return (
//     <Box id="facilities" sx={{ 
//       py: { xs: 4, md: 8 },
//       background: 'linear-gradient(135deg, #616161 0%, #424242 100%)',
//       color: 'white',
//     }}>
//       <Container maxWidth="lg">
//         <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
//           World-Class Facilities
//         </Typography>
        
//         <Grid container spacing={4}>
//           {facilities.map((facility, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card sx={{ 
//                 height: '100%',
//                 bgcolor: 'rgba(255,255,255,0.1)',
//                 border: '1px solid rgba(255,255,255,0.2)'
//               }}>
//                 <CardMedia
//                   component="img"
//                   height="180"
//                   image={facility.image}
//                   alt={facility.title}
//                   sx={{ objectFit: 'cover' }}
//                 />
//                 <Box sx={{ p: 3, textAlign: 'center' }}>
//                   <Box sx={{ color: 'primary.main', mb: 2 }}>
//                     {facility.icon}
//                   </Box>
//                   <Typography variant="h5" gutterBottom>
//                     {facility.title}
//                   </Typography>
//                   <Typography variant="body2">
//                     {facility.description}
//                   </Typography>
//                 </Box>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Facilities;


// components/Facilities.jsx
// import { Box, Container, Typography, Grid, useMediaQuery } from '@mui/material';
// import { Class, Science, Wifi, LibraryBooks } from '@mui/icons-material';


// const Facilities = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');

//   const facilities = [
//     {
//       title: "Smart Classrooms",
//       description: "Digitally equipped with interactive whiteboards and projectors",
//       icon: <Class fontSize="large" />,
//       image: "/classroom.jpeg"
//     },
//     {
//       title: "Advanced Labs",
//       description: "Physics/Chemistry/Biology labs with modern equipment",
//       icon: <Science fontSize="large" />,
//       image: "/lab.jpeg"
//     },
//     {
//       title: "Digital Library",
//       description: "5000+ reference books and online journals access",
//       icon: <LibraryBooks fontSize="large" />,
//       image: "/library.jpeg"
//     },
//     {
//       title: "Impressive Campus",
//       description: "High-speed internet for online resources access",
//       icon: <Wifi fontSize="large" />,
//       image: "/rb classes.jpeg"
//     }
//   ];

//   return (
//     <Box id="facilities" sx={{ 
//       py: 8,
//       pt:7,
//       background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
//       // background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
//       color: 'white',
//     }}>
//       <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
//         <Typography variant="h3" align="center" gutterBottom sx={{ 
//           fontWeight: 'bold', 
//           mb: 6,
//           textShadow: '0 2px 4px rgba(0,0,0,0.3)'
//         }}>
//           World-Class Facilities
//         </Typography>
        
//         <Grid container spacing={4} justifyContent="center">
//           {facilities.map((facility, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
//               <FacilityCard facility={facility} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Facilities;

// // components/FacilityCard.jsx
// import { Card, CardMedia,  } from '@mui/material';

// const FacilityCard = ({ facility }) => (
//   <Card sx={{ 
//     width: '100%',
//     maxWidth: 280,
//     height: '100%',
//     bgcolor: 'rgba(255,255,255,0.1)',
//     border: '1px solid rgba(255,255,255,0.2)',
//     borderRadius: 2
//   }}>
//     <CardMedia
//       component="img"
//       height="180"
//       image={facility.image}
//       alt={facility.title}
//       sx={{ objectFit: 'cover' }}
//     />
//     <Box sx={{ p: 3, textAlign: 'center' }}>
//       <Box sx={{ color: 'primary.main', mb: 2 }}>
//         {facility.icon}
//       </Box>
//       <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
//         {facility.title}
//       </Typography>
//       <Typography variant="body1">
//         {facility.description}
//       </Typography>
//     </Box>
//   </Card>
// );



import { Box, Container, Typography, Grid, useMediaQuery, CardContent } from '@mui/material';
import { Class, Science, Wifi, LibraryBooks } from '@mui/icons-material';

const Facilities = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Digitally equipped with interactive whiteboards and projectors",
      icon: <Class fontSize="large" />,
      image: "/classroom.jpeg",
      color: "#1976d2" // Blue
    },
    {
      title: "Advanced Labs",
      description: "Physics/Chemistry/Biology labs with modern equipment",
      icon: <Science fontSize="large" />,
      image: "/lab.jpeg",
      color: "#4caf50" // Green
    },
    {
      title: "Digital Library",
      description: "5000+ reference books and online journals access",
      icon: <LibraryBooks fontSize="large" />,
      image: "/library.jpeg",
      color: "#ff9800" // Orange
    },
    {
      title: "High-Speed Internet",
      description: "Uninterrupted connectivity for online resources",
      icon: <Wifi fontSize="large" />,
      image: "/rb classes.jpeg",
      color: "#9c27b0" // Purple
    }
  ];

  return (
    <Box id="facilities" sx={{ 
      py: 8,
      background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
      color: 'white',
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ 
          fontWeight: 'bold', 
          mb: 6,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          color: '#ffffff'
        }}>
          World-Class Facilities
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {facilities.map((facility, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <FacilityCard facility={facility} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Facilities;

// components/FacilityCard.jsx
import { Card, CardMedia,  Avatar } from '@mui/material';

const FacilityCard = ({ facility }) => (
  <Card sx={{ 
    width: '100%',
    maxWidth: 280,
    height: '100%',
    bgcolor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 3,
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
    }
  }}>
    <CardMedia
      component="img"
      height="180"
      image={facility.image}
      alt={facility.title}
      sx={{ 
        objectFit: 'cover',
        borderBottom: `4px solid ${facility.color}`
      }}
    />
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Avatar sx={{ 
        bgcolor: facility.color,
        width: 60,
        height: 60,
        mb: 2,
        mx: 'auto'
      }}>
        {facility.icon}
      </Avatar>
      <Typography variant="h5" gutterBottom sx={{ 
        fontWeight: 'bold',
        color: '#ffffff',
        minHeight: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {facility.title}
      </Typography>
      <Typography variant="body1" sx={{ 
        color: '#b0bec5',
        minHeight: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {facility.description}
      </Typography>
    </Box>
  </Card>
);
