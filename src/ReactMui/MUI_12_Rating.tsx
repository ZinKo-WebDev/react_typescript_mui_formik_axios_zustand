import { Rating, Stack } from "@mui/material"
import { useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const MUI_12_Rating = () => {
  const [value,setVAlue]=useState<number>(3)//can be null for not read only status
  const handleOnChange=(event:React.ChangeEvent<{}>,newValue:number) => {
setVAlue(newValue);
  }
  console.log(value)
  return (
    <div>
      <Stack spacing={2}>
        <Rating 
        value={value} 
        onChange={handleOnChange} 
        precision={0.5} 
        size="small" 
        color="success"
        icon={<FavoriteIcon color="error"/>}
        emptyIcon={<FavoriteBorderIcon />}
        readOnly
        ></Rating>
      </Stack>
    </div>
  )
}

export default MUI_12_Rating