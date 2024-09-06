import { Stack, TextField ,InputAdornment} from "@mui/material"
import { useState } from "react"
// *TextField -> variant , label , size , color , required , helperText , type , disable , InputProps={{ readOnly:true }} , error

// * set Read Only - InputProps={{ readOnly:true }}

// *Usage - InputAdornment
//*InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
//*InputProps={{endAdornment: <InputAdornment position="end">kg</InputAdornment>}}


const MUI_07_TextField = () => {
   const [value,setValue]= useState('')
   
  return (
    <div>
<Stack spacing={4}>

    <Stack spacing={2}>
        <TextField variant="outlined" label='Name'></TextField>
        <TextField variant="filled" label='Email'></TextField>
        <TextField variant="standard" label='Password'></TextField>

        <TextField variant="outlined" label='Size And Color' size="small" color="success" required helperText='Do Not Share Your Password To Anyone'></TextField>

        <TextField variant="standard" label='Password' type="password"></TextField>
        <TextField variant="outlined"  value={'John Doe'} disabled></TextField>
        <TextField variant="filled"  value={'johndoe@gmail.com'} inputProps={{readOnly:true}}></TextField>

        <Stack spacing={2}>
        <TextField
      label="Amount"
      variant="outlined"
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>
      }}
    />
       <TextField
      label="Weight"
      variant="outlined"
      InputProps={{
        endAdornment: <InputAdornment position="end">kg</InputAdornment>
      }}
    />
        </Stack>
        <TextField 
        variant="outlined" 
        label='Form Input' 
      value={value}
      onChange={e=>setValue(e.target.value)}
error={!value}
helperText={!value?"Required" : "Please Do Not Share your Data"}
        ></TextField>

    </Stack>

    <Stack direction={'row'}></Stack>

    <Stack direction={'row'}></Stack>

</Stack>
    </div>
  )
}

export default MUI_07_TextField