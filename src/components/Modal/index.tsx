// * MUI
import {
  Backdrop,
  Box,
  Modal as MUIModal,
  Fade,
} from '@mui/material';

// * Models
import { GIF } from '../../models';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1,
};

type IModalProps = {
  gif: GIF | null;
  setSelectedGif: (gif: GIF | null) => void;
}

export const Modal = ({ gif, setSelectedGif }: IModalProps) => {
  const handleClose = () => setSelectedGif(null);

  return (
    <MUIModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={gif !== null}
      onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={gif !== null}>
        <Box sx={style}>
          {<img src={gif?.images.original.url} title={gif?.title} alt={gif?.title} />}
        </Box>
      </Fade>
    </MUIModal>
  );
}
