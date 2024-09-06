import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const MUI_21_NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <IconButton size="large" color="inherit" edge="start" aria-label="logo">
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            POKEMON
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} >
          <Button sx={{ fontWeight: 600 ,fontSize:16 }} color="inherit">Feature</Button>
          <Button sx={{ fontWeight: 600 ,fontSize:16 }} color="inherit">Pricing</Button>
          <Button sx={{ fontWeight: 600 ,fontSize:16 }} color="inherit">About</Button>
          <Button sx={{ fontWeight: 600 ,fontSize:16 }} color="inherit">Log In</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MUI_21_NavBar;
