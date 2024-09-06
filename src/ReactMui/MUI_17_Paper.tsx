import { Paper, Box, Grid } from '@mui/material'

const MUI_17_Paper = () => {
    return (
        <div style={{ backgroundColor: '#D3D3D3', width: "90vw", height: "90vh", padding: "10px" }} >
            <Paper sx={{
                padding:"32px"
            }} elevation={4}>


                <Grid container my={4} spacing={2}>
                    <Grid item lg={4} md={6} sm={12} ><Box sx={{
                        width: "100px",

                        height: "100px",
                        backgroundColor: (theme) => theme.palette.primary.main,
                        color: 'white'
                    }} p={2} m={1}>Item 1</Box> </Grid>
                    <Grid item lg={4} md={6} sm={12} ><Box sx={{
                        width: "100px",

                        height: "100px",
                        backgroundColor: (theme) => theme.palette.primary.main,
                        color: 'white'
                    }} p={2} m={1}>Item 2</Box> </Grid>
                    <Grid item lg={4} md={6} sm={12} ><Box sx={{
                        width: "100px",

                        height: "100px",
                        backgroundColor: (theme) => theme.palette.primary.main,
                        color: 'white'
                    }} p={2} m={1}>Item 3</Box> </Grid>
                    <Grid item lg={4} md={6} sm={12} ><Box sx={{
                        width: "100px",

                        height: "100px",
                        backgroundColor: (theme) => theme.palette.primary.main,
                        color: 'white'
                    }} p={2} m={1}>Item 3</Box> </Grid>

                </Grid>
            </Paper>
        </div>
    )
}

export default MUI_17_Paper