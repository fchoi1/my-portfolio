import React, { useState } from 'react';
import { ImageListItem, Fade, Modal, Box, Backdrop } from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};
const ImageItem = (props) => {
  const { img, alt, title } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <ImageListItem key={img} cols={1} rows={1}>
        <img
          className="project-image"
          src={`${img}?w=248&fit=crop&auto=format`}
          srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={title}
          loading="lazy"
          onClick={handleOpen}
        />
      </ImageListItem>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <img src={img} alt={alt} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImageItem;
