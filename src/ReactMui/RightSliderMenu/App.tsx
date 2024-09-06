import { CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import SideMenu from './MUI/SideMenu';
 // Adjust the path as needed

const App = () => {
 
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">My Application</Typography>
        </Toolbar>
      </AppBar>
      <main style={{ padding: '24px', marginTop: '64px' }}>
        <h1>Welcome to the App</h1>
<SideMenu></SideMenu>

      </main>
    </div>
  );
};

export default App;
