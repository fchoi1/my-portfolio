import React from 'react';
import ImageItem from 'components/ImageModal';
import { ImageList, ImageListItem, Box } from '@mui/material';
import './imagelist.css';

function ImageDisplayList(props) {
  const { images } = props;

  return (
    <Box
      sx={{
        width: { md: '90%', sm: '60%', xs: '85%' },
        maxHeight: { md: '20vw', sm: '35vw', xs: '55vw' },
        overflowY: 'scroll'
      }}
    >
      <ImageList cols={1}>
        {images.map((item, i) => (
          <ImageItem
            img={item.img}
            alt={item.title}
            title={item.title}
            key={i}
          />
        ))}
      </ImageList>
    </Box>
  );
}

export default ImageDisplayList;
