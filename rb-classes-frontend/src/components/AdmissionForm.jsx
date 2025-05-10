// // components/AdmissionForm.jsx
// import { 
//   Box, Container, Typography, Paper, Grid, 
//   TextField, Button, MenuItem, useMediaQuery 
// } from '@mui/material';

// const AdmissionForm = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');
  
//   const courses = [
//     { name: 'NEET Foundation' },
//     { name: 'JEE Mains & Advanced' },
//     { name: 'NEET Crash Course' },
//   ];

//   return (
//     <Box id="admission" sx={{ 
//       py: { xs: 4, md: 8 },
//       background: 'linear-gradient(135deg, #455a64 0%, #263238 100%)',
//       color: 'white',
//     }}>
//       <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
//         <Paper elevation={3} sx={{ 
//           p: { xs: 2, md: 4 },
//           bgcolor: 'rgba(255,255,255,0.1)',
//           color: 'white',
//           border: '1px solid rgba(255,255,255,0.2)'
//         }}>
//           <Typography 
//             variant="h4" 
//             component="h2" 
//             align="center" 
//             gutterBottom 
//             sx={{ 
//               fontWeight: 'bold', 
//               mb: 3,
//               textShadow: '0 2px 4px rgba(0,0,0,0.3)'
//             }}
//           >
//             Admission Enquiry
//           </Typography>
//           <form>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField 
//                   fullWidth 
//                   label="Student Name" 
//                   variant="outlined" 
//                   required 
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: 'rgba(255,255,255,0.3)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'rgba(255,255,255,0.5)',
//                       },
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: 'rgba(255,255,255,0.7)',
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'white',
//                     }
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField 
//                   fullWidth 
//                   label="Parent Name" 
//                   variant="outlined" 
//                   required
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: 'rgba(255,255,255,0.3)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'rgba(255,255,255,0.5)',
//                       },
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: 'rgba(255,255,255,0.7)',
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'white',
//                     }
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField 
//                   fullWidth 
//                   label="Email" 
//                   type="email" 
//                   variant="outlined" 
//                   required
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: 'rgba(255,255,255,0.3)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'rgba(255,255,255,0.5)',
//                       },
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: 'rgba(255,255,255,0.7)',
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'white',
//                     }
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField 
//                   fullWidth 
//                   label="Phone" 
//                   type="tel" 
//                   variant="outlined" 
//                   required
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: 'rgba(255,255,255,0.3)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'rgba(255,255,255,0.5)',
//                       },
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: 'rgba(255,255,255,0.7)',
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'white',
//                     }
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField 
//                   fullWidth 
//                   label="Address" 
//                   variant="outlined" 
//                   multiline 
//                   rows={3} 
//                   required
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: 'rgba(255,255,255,0.3)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'rgba(255,255,255,0.5)',
//                       },
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: 'rgba(255,255,255,0.7)',
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'white',
//                     }
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Interested Course"
//                   select
//                   variant="outlined"
//                   required
//                   defaultValue=""
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: 'rgba(255,255,255,0.3)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'rgba(255,255,255,0.5)',
//                       },
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: 'rgba(255,255,255,0.7)',
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'white',
//                     },
//                     '& .MuiSvgIcon-root': {
//                       color: 'rgba(255,255,255,0.7)',
//                     }
//                   }}
//                 >
//                   <MenuItem value="" disabled>Select a course</MenuItem>
//                   {courses.map((course) => (
//                     <MenuItem key={course.name} value={course.name}>
//                       {course.name}
//                     </MenuItem>
//                   ))}
//                 </TextField>
//               </Grid>
//               <Grid item xs={12}>
//                 <Button 
//                   type="submit" 
//                   variant="contained" 
//                   color="secondary" 
//                   size="large" 
//                   fullWidth
//                   sx={{ mt: 2, py: 1.5 }}
//                 >
//                   Submit Enquiry
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default AdmissionForm;



// components/AdmissionForm.jsx
import { Box, Container, Typography, Paper, Grid, TextField, Button, MenuItem, useMediaQuery } from '@mui/material';

const AdmissionForm = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  const courses = [
    { name: 'NEET Foundation' },
    { name: 'JEE Mains & Advanced' },
    { name: 'NEET Crash Course' },
  ];

  return (
    <Box id="admission" sx={{ 
      py: 8,
      pt:7,
      background: 'linear-gradient(135deg, #263238 0%, #000000 100%)',
      color: 'white',
    }}>
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        <Paper elevation={3} sx={{ 
          p: { xs: 3, md: 4 },
          bgcolor: 'rgba(255,255,255,0.1)',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 2
        }}>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              mb: 4,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Admission Enquiry
          </Typography>
          
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth
                label="Student Name"
                variant="outlined"
                required
                sx={textFieldStyle}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth
                label="Parent Name"
                variant="outlined"
                required
                sx={textFieldStyle}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                required
                sx={textFieldStyle}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth
                label="Phone"
                type="tel"
                variant="outlined"
                required
                sx={textFieldStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth
                label="Address"
                variant="outlined"
                multiline
                rows={3}
                required
                sx={textFieldStyle}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Interested Course"
                select
                variant="outlined"
                required
                defaultValue=""
                sx={textFieldStyle}
              >
                <MenuItem value="" disabled>Select a course</MenuItem>
                {courses.map((course) => (
                  <MenuItem key={course.name} value={course.name}>
                    {course.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button 
                type="submit" 
                variant="contained" 
                color="secondary" 
                size="large"
                sx={{ 
                  mt: 2, 
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                Submit Enquiry
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
    '&.Mui-focused fieldset': { borderColor: 'rgba(255,255,255,0.7)' }
  },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
  '& .MuiInputBase-input': { color: 'white' },
  '& .MuiSvgIcon-root': { color: 'rgba(255,255,255,0.7)' }
};

export default AdmissionForm;