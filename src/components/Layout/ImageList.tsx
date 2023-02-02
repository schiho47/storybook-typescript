import * as React from "react";
import MuiImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface ImageListProps {
  itemData: { img: string; title: string }[];
  style: object;
}
const ImageList: React.FC<ImageListProps> = ({ itemData, style }) => {
  return (
    <MuiImageList sx={style} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </MuiImageList>
  );
};

export default ImageList;
