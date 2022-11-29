// * MUI
import { Grid, Typography } from '@mui/material';

// * Components
import { SearchBar } from '../components/SearchBar';

type IHeaderProps = {
  search: string;
  setSearch: (value: string) => void;
  onSubmit: () => void;
}

export const Header = ({ search, setSearch, onSubmit }: IHeaderProps) => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} textAlign="center">
        <Typography variant="h5">SEARCH GIF</Typography>
      </Grid>

      <Grid item xs={12}>
        <SearchBar
          value={search}
          onChange={(value) => setSearch(value)}
          onSearch={onSubmit}
        />
      </Grid>
    </Grid>
  );
}