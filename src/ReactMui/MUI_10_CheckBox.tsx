import { useState } from 'react';
import { Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup } from '@mui/material';


const MUI_10_CheckBox = () => {

    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };


    const [skillChecked, setSkillChecked] = useState<string[]>([])
    const skillCheckhandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skillChecked.indexOf(event.target.value);
        if (index === -1) {
            setSkillChecked([...skillChecked, event.target.value]);
        } else {
            setSkillChecked(skillChecked.filter((skill) => skill !== event.target.value))
        }
    }
    console.log(skillChecked)

    return (
        <div>
            <Box>
                <FormControlLabel
                    label="I Accept Terms And Conditions."
                    control={<Checkbox checked={checked} onChange={handleChange} />}
                />
            </Box>
            <br />
            <Box>
                <FormControl>

                    <FormLabel>Skills</FormLabel>

                    <FormGroup>

                        <FormControlLabel
                            value='HTML'
                            label='HTML'
                            control={<Checkbox checked={skillChecked.includes('HTML')} onChange={skillCheckhandler}></Checkbox>}></FormControlLabel>

                        <FormControlLabel
                            value='CSS'
                            label='CSS'
                            control={<Checkbox checked={skillChecked.includes('CSS')} onChange={skillCheckhandler}></Checkbox>}></FormControlLabel>

                        <FormControlLabel
                            value='JS'
                            label='JS'
                            control={<Checkbox checked={skillChecked.includes('JS')} onChange={skillCheckhandler}></Checkbox>}></FormControlLabel>

                    </FormGroup>
                </FormControl>
            </Box>
        </div>
    )
}

export default MUI_10_CheckBox;