import { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Divider, Box } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
const SideMenu = () => {

  const [open, setOpen] = useState(false);

  const toggleDrawerFun = () => {
    setOpen(!open);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      {/* Menu Button */}
      <IconButton 
        color="error" 
        aria-label="open drawer" 
        edge="start" 
        
        onClick={toggleDrawerFun}
        sx={{ mr: 2 }}
      >
        <ManageSearchIcon />
      </IconButton>

      {/* Side Drawer */}
      <Drawer
        variant="persistent"
        anchor="right"
        open={open}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 500,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={toggleDrawerFun}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideMenu;
