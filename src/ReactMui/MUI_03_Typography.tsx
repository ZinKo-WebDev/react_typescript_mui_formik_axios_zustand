import {Typography} from '@mui/material'

// *Typography -> variant {h1 to h6 And  subtitle1, subtitle2 ,body1 ,body2 } 

const MUI_01_Typography = () => {
  return (
    <div>
<Typography variant='h1'>Typography</Typography>
<Typography variant='h2'>Typography</Typography>
<Typography variant='h3'>Typography</Typography>
<Typography variant='h4'>Typography</Typography>
<Typography variant='h5'>Typography</Typography>
<Typography variant='h6'>Typography</Typography>

<Typography variant='subtitle1'>subtitle1</Typography>
<Typography variant='subtitle2'>subtitle2</Typography>

<Typography variant='body1'>Lorem ipsum dolor sit amet.</Typography>
<Typography variant='body2'>Lorem ipsum dolor sit amet.</Typography>
    </div>
  )
}

export default MUI_01_Typography