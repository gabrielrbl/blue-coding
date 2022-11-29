// * MUI
import { Box, TextField } from '@mui/material';

type IInputProps = {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
}

export const Input = ({ label, name, value, onChange }: IInputProps) => {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-basic'
        name={name}
        label={label}
        variant='outlined'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  )
}
