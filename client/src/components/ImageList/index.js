import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  };
}

function ImageDisplayList(props) {
  const { images } = props;
  return (
    <ImageList sx={{ maxHeight: 450 }} variant="quilted" cols={2} rowHeight={121}>
      {images.map((item, i) => (
        <ImageListItem
          key={item.img}
          cols={i % 3 === 0 ? 2 : 1}
          rows={i % 3 === 0 ? 2 : 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ImageDisplayList;
