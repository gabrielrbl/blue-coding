// * MUI
import { IconButton, Input, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// * Styles
import "./styles.css";

type ISearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export const SearchBar = ({ value, onChange, onSearch }: ISearchBarProps) => {
  return (
    <Paper className="search-bar-paper">
      <div style={{
        margin: "auto 16px",
        width: `calc(100% - ${80}px)`,
        padding: "8px 16px",
      }}>
        <Input
          value={value}
          fullWidth
          onChange={(e) => onChange(e.target.value)}
          disableUnderline
          placeholder="Enter a search term and click on the search button..."
        />
      </div>

      <IconButton
        className='search-bar-button'
        onClick={onSearch}
        sx={{
          ...(value === "" && {
            transform: "scale(0, 0)",
            "& > $icon": {
              opacity: 0,
            },
          }),
        }}
      >
        <SearchIcon sx={{ transition: "opacity .2s ease-in-out", color: '#0294cc' }} />
      </IconButton>
    </Paper>
  );
}
