import { Box } from "@mui/material";
//* Box is Replacement of Div Tag 
//* Box -> component , sx
//* component - for setting what tag is
//* sx - for styling
const MUI_14_Box = () => {
  return (
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
  );
}

export default MUI_14_Box;
