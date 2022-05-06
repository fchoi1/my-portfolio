import React from 'react';
import { ImageList, ImageListItem, Box } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w='${size * cols}'&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  };
}

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
          <ImageListItem
            key={item.img}
            cols={i % 3 === 0 ? 2 : 1}
            rows={i % 3 === 0 ? 2 : 1}
          >
            <img
              // {...srcset(item.img, 200, item.rows, item.cols)}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ImageDisplayList;
