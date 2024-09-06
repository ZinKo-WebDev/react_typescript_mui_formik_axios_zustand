import { Stack, Button, IconButton } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

// *Stack -> spacing , direction ,display
// *Stack - display is flex as default

// *Button -> variant, href ,color ,size, onclick
// *Button - size medium as default

// *Icon button -> startIcon ,endIcon, aria-label, onclick
//*aria-label='name' for accessibility

const MUI_04_Button = () => {
  return (
    <div>
      <div className="">
        <Stack spacing={4}>

          <Stack spacing={2} direction={'row'}>
            <Button
              variant='text'
              href='https://www.google.com'
              color='primary'
            >Button 1</Button>
            <Button variant='contained' href='https://www.google.com' color='secondary'>Button 2</Button>
            <Button variant='outlined' href='https://www.google.com' color='success'>Button 3</Button>
          </Stack>

          <Stack spacing={2} direction={'row'} display={'block'}>
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>error</Button>

            <Button variant='contained' size='small' color='warning'>warning</Button>
            <Button variant='contained' size='medium' color='info'>info</Button>
            <Button onClick={() => {alert('clicked')}} variant='contained' size='large' color='success'>success</Button>
          </Stack>

          {/* using icons */}
          <Stack spacing={2} direction={'row'}>
            <Button variant='contained' startIcon={<AccessAlarmIcon />}>Send</Button>
            <IconButton onClick={() => {alert('clicked')}} color='success' size='small' aria-label='time'>{<AccessAlarmIcon />}</IconButton>
            {/* aria-label='time' for accessibility  */}
          </Stack>
        </Stack>
      </div>


    </div>
  )
}

export default MUI_04_Button