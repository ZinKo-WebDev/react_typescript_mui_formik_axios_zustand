import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MUI_19_Accordion = () => {

    return (
        <div>

            <Box width={'800px'} mx={'auto'} mt={4}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Accordion Blog 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam minus aliquam, molestiae quisquam fuga doloremque, eius facere dolorem, reprehenderit est error. Doloribus repellendus tenetur vel! Facilis tempore sunt sit!</Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box width={'800px'} mx={'auto'} mt={4}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Accordion Blog 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam minus aliquam, molestiae quisquam fuga doloremque, eius facere dolorem, reprehenderit est error. Doloribus repellendus tenetur vel! Facilis tempore sunt sit!</Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box width={'800px'} mx={'auto'} mt={4}>
                <Accordion>
                    <AccordionSummary >
                        <Typography>Accordion Blog 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam minus aliquam, molestiae quisquam fuga doloremque, eius facere dolorem, reprehenderit est error. Doloribus repellendus tenetur vel! Facilis tempore sunt sit!</Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            
        </div>
    )
}

export default MUI_19_Accordion