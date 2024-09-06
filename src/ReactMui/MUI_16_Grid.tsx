import { Box, Grid } from "@mui/material"


const MUI_16_Grid = () => {
  return (
    <div>
        <Grid container my={4} spacing={2}>
            <Grid item lg={4} md={6} sm={12} ><Box  sx={{
                width:"100px",
                
                height:"100px",
                backgroundColor:(theme)=>theme.palette.primary.main,
                color:'white'
            }} p={2} m={1}>Item 1</Box> </Grid>
            <Grid item lg={4} md={6} sm={12} ><Box  sx={{
                width:"100px",
                
                height:"100px",
                backgroundColor:(theme)=>theme.palette.primary.main,
                color:'white'
            }} p={2} m={1}>Item 2</Box> </Grid>
            <Grid item lg={4} md={6} sm={12} ><Box  sx={{
                width:"100px",
                
                height:"100px",
                backgroundColor:(theme)=>theme.palette.primary.main,
                color:'white'
            }} p={2} m={1}>Item 3</Box> </Grid>
            <Grid item lg={4} md={6} sm={12} ><Box  sx={{
                width:"100px",
                
                height:"100px",
                backgroundColor:(theme)=>theme.palette.primary.main,
                color:'white'
            }} p={2} m={1}>Item 3</Box> </Grid>
   
        </Grid>
    </div>
  )
}

export default MUI_16_Grid