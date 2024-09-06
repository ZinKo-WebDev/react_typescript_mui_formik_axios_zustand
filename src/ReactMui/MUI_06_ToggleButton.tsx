import { Stack, ToggleButtonGroup, ToggleButton } from '@mui/material'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { useState } from 'react';

//*ToggleButtonGroup -> aria-label,onChange,size,color,orientation
//*ToggleButton -> aria-label, value

const MUI_06_ToggleButton = () => {
    const [format, setFormat] = useState<string|null>(null)
    console.log(format);
    const handleFormatChange = (
        _event: React.MouseEvent<HTMLElement>,
        updatedFormats: string|null
    ) => {
        setFormat(updatedFormats)
    }
    return (
        <div>
            <Stack direction={'row'}>
                <ToggleButtonGroup aria-label='text formattion' value={format} onChange={handleFormatChange}
                    size='small'
                    color='success'
                    orientation='vertical'
                    exclusive
                >

                    <ToggleButton
                        aria-label='underlined'
                        value='underlined'
                    >
                        <FormatUnderlinedIcon />
                    </ToggleButton>

                    <ToggleButton
                        aria-label='bold'
                        value='bold'
                    >
                        <FormatBoldIcon />
                    </ToggleButton>

                    <ToggleButton
                        aria-label='italic'
                        value='italic'
                    >
                        <FormatItalicIcon />
                    </ToggleButton>

                </ToggleButtonGroup>
            </Stack>
        </div>
    )
}

export default MUI_06_ToggleButton