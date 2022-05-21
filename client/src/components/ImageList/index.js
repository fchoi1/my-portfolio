import React from 'react';
import ImageItem from 'components/ImageModal';
import { ImageList, ImageListItem, Box } from '@mui/material';
import './imagelist.css';

function ImageDisplayList(props) {
  const { images } = props;

  return (
    <Box
      sx={{
        width: { md: 300, sm: 300, xs: 200 },
        maxHeight: { md: 300, sm: 300, xs: 200 },
        overflowY: 'scroll'
      }}
    >
      <ImageList
        // sx={{ maxHeight: 500, textAlign: 'center' }}
        cols={1}
        // rowHeight={200}
      >
        {images.map((item, i) => (
          // <ImageListItem key={item.img} cols={1} rows={1}>
          //   {/* <button>

          //   </button> */}

          //   <ImageModal img={item.img} alt={item.title} title={item.title} />
          // </ImageListItem>
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
