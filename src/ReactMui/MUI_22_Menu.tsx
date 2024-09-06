import { Button, Menu, MenuItem, Stack } from "@mui/material";
import { useState } from "react";

const MUI_22_Menu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button
                    sx={{ fontWeight: 600, fontSize: 16, backgroundColor: 'skyblue' }}
                    color="inherit"
                    id="resources-button"
                    onClick={handleClick}
                    aria-controls={open ? 'resources-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    Resources
                </Button>
            </Stack>

            <Menu
                id="resources-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "resources-button"
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </div>
    );
};

export default MUI_22_Menu;
