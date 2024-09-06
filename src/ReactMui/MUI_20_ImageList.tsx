import { ImageList, ImageListItem, Stack } from "@mui/material";

const MUI_20_ImageList = () => {
  const itemData = [
    {
      img: 'https://images.pexels.com/photos/35196/water-plant-green-fine-layers.jpg?auto=compress&cs=tinysrgb&w=600',
      title: 'Image 01',
    },
    {
      img: 'https://images.pexels.com/photos/213727/pexels-photo-213727.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Image 02',
    },
    {
      img: 'https://images.pexels.com/photos/1022922/pexels-photo-1022922.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Image 03',
    },
    {
      img: 'https://images.pexels.com/photos/401213/pexels-photo-401213.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Image 04',
    },
    {
      img: 'https://images.pexels.com/photos/1302305/pexels-photo-1302305.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Image 05',
    },
    {
      img: 'https://images.pexels.com/photos/1353938/pexels-photo-1353938.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Image 06',
    },
    {
      img: 'https://images.pexels.com/photos/2736497/pexels-photo-2736497.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Image 07',
    },
    {
      img: 'https://images.pexels.com/photos/1113145/pexels-photo-1113145.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Image 08',
    },
    {
      img: 'https://images.pexels.com/photos/1048033/pexels-photo-1048033.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Image 09',
    },
    {
      img: 'https://images.pexels.com/photos/565998/pexels-photo-565998.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Image 10',
    },
    {
      img: 'https://images.pexels.com/photos/1382195/pexels-photo-1382195.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Image 11',
    },
    {
      img: 'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Image 12',
    },
  ];

  return (
    <div>
      <Stack spacing={4}>
        <ImageList
          sx={{ width: '60%', height: 'auto' }} // Adjusted to be responsive
          cols={3}
          rowHeight={400}
        >
          {itemData.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={`${item.img}`}
                alt={item.title} // Added alt attribute for accessibility
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </div>
  );
};

export default MUI_20_ImageList;
