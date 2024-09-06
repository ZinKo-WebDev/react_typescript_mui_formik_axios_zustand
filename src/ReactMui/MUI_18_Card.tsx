import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const MUI_18_Card = () => {
  return (
    <div>
      <Box width={'400px'} mx="auto" mt={4}>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image="https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Card image"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              LOREM
            </Typography>
            <Typography variant="body2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet excepturi sit itaque esse iste alias voluptatibus accusantium culpa atque cum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Share</Button>
            <Button>Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default MUI_18_Card;
