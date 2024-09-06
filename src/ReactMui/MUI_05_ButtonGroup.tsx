import { Stack, Button, ButtonGroup } from '@mui/material'

//*ButtonGroup -> variant , orientation , size,color , aria-label
//*ButtonGroup -> variant replace for every buttons inslide group 
//*aria-label='name' for accessibility

const MUI_05_ButtonGroup = () => {
    return (
        <div>
            <Stack direction={'row'}>
                <ButtonGroup 
                variant='contained' 
                orientation='vertical' 
                size='small' 
                color='info'
                aria-label='allgnment button group'
                >

                    <Button onClick={() => alert('left clicked')}> left</Button>
                    <Button> center</Button>
                    <Button> right</Button>

                </ButtonGroup>
            </Stack>
        </div>
    )
}

export default MUI_05_ButtonGroup