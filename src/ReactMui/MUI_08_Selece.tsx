import { Box, TextField, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from "react"

//* Box -> width='400px'
//* TextField- label,select,variant,fullWidth,value,onChange

const MUI_08_Selece = () => {

    {/* Single Select Field */ }
    const [country, setCountry] = useState<string>('');
    const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string);
    };

    {/* Multi Select Field */ }
    const [countries, setCountries] = useState<string[]>([]);
    console.log(countries)
    const multionchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {target: { value }} = event;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    };
    return (
        <div>
            {/* Single Select Field */}
            <Box width="400px">
                <TextField
                    label="country"
                    select
                    variant="outlined"
                    fullWidth
                    value={country}
                    onChange={onchangeHandler}
                >
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="CH">China</MenuItem>
                    <MenuItem value="TH">Thailand</MenuItem>
                    <MenuItem value="BD">Bangladesh</MenuItem>
                </TextField>
            </Box>
            <br />
            {/* Multi Select Field */}
            <Box width="400px">
                <TextField
                    label="Countries"
                    select
                    variant="outlined"
                    fullWidth
                    value={countries}
                    onChange={multionchangeHandler}
                    SelectProps={{
                        multiple: true
                    }}
                    size='small'
                    color='info'
                    helperText={ "Please Select Countries"}
                    error={countries.length <1}
                >
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="CH">China</MenuItem>
                    <MenuItem value="TH">Thailand</MenuItem>
                    <MenuItem value="BD">Bangladesh</MenuItem>
                </TextField>
            </Box>
        </div>
    );
}

export default MUI_08_Selece