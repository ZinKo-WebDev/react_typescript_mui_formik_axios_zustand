import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio ,FormHelperText} from "@mui/material"
import { useState } from "react"

const MUI_09_RadioButton = () => {
    const [value, setValue] = useState<string>('')
    const radioGroupHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    console.log(value)
    return (
        <div>
            <Box>
                <FormControl error>
        <FormLabel id="job-experience-group-label">Years Of Experience</FormLabel>

                    <RadioGroup 
                    name="job-experience-group" aria-label="job-experience-group-label"
                    value={value}
                    onChange={radioGroupHandler}
                    row
                 
                    >
                        <FormControlLabel control={<Radio size="small" color="secondary"></Radio>} label='0-2' value='0-2'></FormControlLabel>
                        <FormControlLabel control={<Radio size="small" color="secondary"></Radio>} label='2-4' value='2-4'></FormControlLabel>
                        <FormControlLabel control={<Radio size="small" color="secondary"></Radio>} label='4-6' value='4-6'></FormControlLabel>

                    </RadioGroup>

            <FormHelperText>Invalid</FormHelperText>
                </FormControl>
            </Box>
        </div>
    )
}

export default MUI_09_RadioButton