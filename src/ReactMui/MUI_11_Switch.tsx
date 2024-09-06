import { Box, FormControlLabel, Switch } from "@mui/material"
import { useState } from "react"


const MUI_11_Switch = () => {
    const [switchValue,setSwitchValue]=useState(false)
    const handleCheck=(event:React.ChangeEvent<HTMLInputElement>) =>{
        setSwitchValue(event.target.checked)
    } 
    console.log(switchValue);
  return (
    <div>
        <Box>
            <FormControlLabel
            label="Dark Mode"
            control={<Switch checked={switchValue} onChange={handleCheck}></Switch>}
            ></FormControlLabel>
        </Box>
    </div>
  )
}

export default MUI_11_Switch