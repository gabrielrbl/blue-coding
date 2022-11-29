// * MUI
import { Button as MUIButton, Stack } from '@mui/material';
import { Search } from '@mui/icons-material';

export const Button = () => {
  return (
    <Stack direction="row" spacing={2}>
      <MUIButton variant="outlined" startIcon={<Search />}>
        Search
      </MUIButton>
    </Stack>
  );
}