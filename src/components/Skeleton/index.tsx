// * MUI
import { Grid, Skeleton as MUISkeleton } from '@mui/material';

export const Skeleton = () => {
  return (
    <Grid container wrap="nowrap">
      <MUISkeleton variant="rectangular" width={300} height={300} />
    </Grid>
  );
}
