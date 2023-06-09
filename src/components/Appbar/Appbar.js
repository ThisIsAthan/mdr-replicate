import * as React from 'react';
import Appbar from '@mui/material/Appbar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const ControlledApplicationBar = (props) => {
    const { title = "News" } = props
    return (
       <Box sx={{ flexGrow: 1 }}>
        <Appbar>
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2}}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    {title}
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
                </Appbar>
                </Box>
    );
}