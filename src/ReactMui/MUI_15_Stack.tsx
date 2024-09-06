import { Stack ,Box} from "@mui/material"


const MUI_15_Stack = () => {
  return (
    <div>
        <Stack sx={{
            display:'flex',
            border:'1px solid ',
           
        }} direction={'row'} spacing={2} p={'10px'}>
        <Box 
      component="span"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main, 
        color: 'white',
        height: '220px',
        width: '120px',
        padding: '10px',
        display: 'inline-block',
        textAlign: 'center', 
        lineHeight: '220px',
        '&:hover':{
            backgroundColor: (theme) => theme.palette.success.main, 
            color: 'white',
        }
      }}
    >
      MUI_14_Box
    </Box>
    <Box 
      component="span"
      sx={{

        backgroundColor: (theme) => theme.palette.secondary.main, 
        color: 'white',
        height: '220px',
        width: '120px',
        padding: '10px',
        display: 'inline-block',
        textAlign: 'center', 
        lineHeight: '220px',
        '&:hover':{
            backgroundColor: (theme) => theme.palette.success.main, 
            color: 'white',
        }
      }}
    >
      MUI_14_Box
    </Box>
        </Stack>
    
    </div>
  )
}

export default MUI_15_Stack