// * MUI
import { Box, CircularProgress as Progress }  from '@mui/material';

export const CircularProgress = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Progress />
    </Box>
  );
}