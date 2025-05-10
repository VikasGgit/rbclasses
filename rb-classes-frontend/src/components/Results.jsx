// // components/Results.jsx
// import { Box, Container, Typography, Grid, Paper, useMediaQuery } from '@mui/material';
// import { EmojiEvents, School, Stars, TrendingUp } from '@mui/icons-material';

// const Results = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');

//   const stats = [
//     { 
//       year: "2023", 
//       selections: 142, 
//       top100: 18, 
//       improvement: "32%", 
//       highlight: "3 Students in Top 20 NEET"
//     },
//     { 
//       year: "2022", 
//       selections: 118, 
//       top100: 15, 
//       improvement: "27%", 
//       highlight: "2 Students in Top 50 JEE"
//     },
//     { 
//       year: "2021", 
//       selections: 96, 
//       top100: 11, 
//       improvement: "19%", 
//       highlight: "1 AIR 12 in NEET"
//     }
//   ];

//   return (
//     <Box id="results" sx={{ 
//       py: 8,
//       background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
//       color: 'white',
//     }}>
//       <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
//         <Typography variant="h3" align="center" gutterBottom sx={{ 
//           fontWeight: 'bold', 
//           mb: 3,
//           textShadow: '0 2px 4px rgba(0,0,0,0.3)'
//         }}>
//           Our Legacy of Success
//         </Typography>
//         <Typography variant="h5" align="center" gutterBottom sx={{ mb: 6, opacity: 0.9 }}>
//           Consistent top rankings since 2010
//         </Typography>

//         <Grid container spacing={3} sx={{ mb: 6 }} justifyContent="center">
//           <StatItem 
//             icon={<EmojiEvents sx={{ fontSize: 40, color: '#FFD700' }} />} 
//             value="350+" 
//             label="Total Selections" 
//           />
//           <StatItem 
//             icon={<School sx={{ fontSize: 40, color: '#4CAF50' }} />} 
//             value="44" 
//             label="Top 100 Ranks" 
//           />
//           <StatItem 
//             icon={<Stars sx={{ fontSize: 40, color: '#FF9800' }} />} 
//             value="92%" 
//             label="Success Rate" 
//           />
//           <StatItem 
//             icon={<TrendingUp sx={{ fontSize: 40, color: '#F44336' }} />} 
//             value="28%" 
//             label="Avg. Score Improvement" 
//           />
//         </Grid>

//         <Grid container spacing={4} justifyContent="center">
//           {stats.map((stat, index) => (
//             <Grid item xs={12} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center', color:"white" }}>
//               <YearCard stat={stat} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// const StatItem = ({ icon, value, label }) => (
//   <Grid item xs={6} sm={3}>
//     <Paper sx={{ 
//       p: 3, 
//       textAlign: 'center',
//       bgcolor: 'rgba(255,255,255,0.1)',
//       border: '1px solid rgba(255,255,255,0.3)',
//       borderRadius: 2,
//       height: '100%'
//     }}>
//       <Box sx={{ mb: 1.5 }}>{icon}</Box>
//       <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{value}</Typography>
//       <Typography>{label}</Typography>
//     </Paper>
//   </Grid>
// );

// const YearCard = ({ stat }) => (
//   <Paper sx={{ 
//     p: 3,
//     pt:7,
//     width: '100%',
//     maxWidth: 350,
//     bgcolor: 'rgba(0,0,0,0.2)',
//     border: '1px solid rgba(255,255,255,0.2)',
//     borderRadius: 2
//   }}>
//     <Typography variant="h4" gutterBottom sx={{ 
//       fontWeight: 'bold',
//       color: 'primary.light'
//     }}>
//       {stat.year}
//     </Typography>
//     <StatLine sx={{color:"white"}} value={stat.selections} label="Selections" />
//     <StatLine  sx={{color:"white"}}  value={stat.top100} label="Top 100 Ranks" />
//     <StatLine  sx={{color:"white"}}  value={stat.improvement} label="Avg. Score Improvement" />
//     <Paper sx={{ 
//       mt: 3, 
//       p: 2, 
//       bgcolor: 'rgba(25, 118, 210, 0.3)',
//       borderLeft: '4px solid #FFD700',
//       borderRadius: 1
//     }}>
//       <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
//         "{stat.highlight}"
//       </Typography>
//     </Paper>
//   </Paper>
// );

// const StatLine = ({ value, label }) => (
//   <Box sx={{ mb: 2 }}>
//     <Typography display="inline" sx={{ mr: 2, fontWeight: 'bold' }}>
//       {value}
//     </Typography>
//     <Typography display="inline">{label}</Typography>
//   </Box>
// );

// export default Results;


import { Box, Container, Typography, Grid, Paper, useMediaQuery } from '@mui/material';
import { EmojiEvents, School, Stars, TrendingUp } from '@mui/icons-material';

const Results = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const stats = [
    { 
      year: "2023", 
      selections: 142, 
      top100: 18, 
      improvement: "32%", 
      highlight: "3 Students in Top 20 NEET"
    },
    { 
      year: "2022", 
      selections: 118, 
      top100: 15, 
      improvement: "27%", 
      highlight: "2 Students in Top 50 JEE"
    },
    { 
      year: "2021", 
      selections: 96, 
      top100: 11, 
      improvement: "19%", 
      highlight: "1 AIR 12 in NEET"
    }
  ];

  return (
    <Box id="results" sx={{ 
      py: 8,
      background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
      color: 'white',
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ 
          fontWeight: 'bold', 
          mb: 3,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          color: '#ffffff'
        }}>
          Our Legacy of Success
        </Typography>
        <Typography variant="h5" align="center" gutterBottom sx={{ 
          mb: 6, 
          color: '#b0bec5'
        }}>
          Consistent top rankings since 2010
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }} justifyContent="center">
          <StatItem 
            icon={<EmojiEvents sx={{ fontSize: 40, color: '#FFD700' }} />} 
            value="350+" 
            label="Total Selections" 
          />
          <StatItem 
            icon={<School sx={{ fontSize: 40, color: '#4CAF50' }} />} 
            value="44" 
            label="Top 100 Ranks" 
          />
          <StatItem 
            icon={<Stars sx={{ fontSize: 40, color: '#FF9800' }} />} 
            value="92%" 
            label="Success Rate" 
          />
          <StatItem 
            icon={<TrendingUp sx={{ fontSize: 40, color: '#F44336' }} />} 
            value="28%" 
            label="Avg. Score Improvement" 
          />
        </Grid>

        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <YearCard stat={stat} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const StatItem = ({ icon, value, label }) => (
  <Grid item xs={6} sm={3}>
    <Paper sx={{ 
      p: 3, 
      textAlign: 'center',
      bgcolor: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: 2,
      height: '100%',
      color: '#ffffff'
    }}>
      <Box sx={{ mb: 1.5 }}>{icon}</Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffffff' }}>{value}</Typography>
      <Typography sx={{ color: '#b0bec5' }}>{label}</Typography>
    </Paper>
  </Grid>
);

const YearCard = ({ stat }) => (
  <Paper sx={{ 
    p: 3,
    width: '100%',
    maxWidth: 350,
    bgcolor: 'rgba(0,0,0,0.2)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 2,
    color: '#ffffff'
  }}>
    <Typography variant="h4" gutterBottom sx={{ 
      fontWeight: 'bold',
      color: '#4fc3f7'
    }}>
      {stat.year}
    </Typography>
    <StatLine value={stat.selections} label="Selections" />
    <StatLine value={stat.top100} label="Top 100 Ranks" />
    <StatLine value={stat.improvement} label="Avg. Score Improvement" />
    <Paper sx={{ 
      mt: 3, 
      p: 2, 
      bgcolor: 'rgba(25, 118, 210, 0.3)',
      borderLeft: '4px solid #FFD700',
      borderRadius: 1,
      color: '#e0e0e0'
    }}>
      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
        "{stat.highlight}"
      </Typography>
    </Paper>
  </Paper>
);

const StatLine = ({ value, label }) => (
  <Box sx={{ mb: 2 }}>
    <Typography display="inline" sx={{ 
      mr: 2, 
      fontWeight: 'bold',
      color: '#ffffff'
    }}>
      {value}
    </Typography>
    <Typography display="inline" sx={{ color: '#b0bec5' }}>
      {label}
    </Typography>
  </Box>
);

export default Results;