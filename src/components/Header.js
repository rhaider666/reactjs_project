import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" color={'black'}>
                        Byte Tech Solutions
                    </Typography>
                    <Box>
                        <Button
                            component={Link}
                            to="/"
                            sx={{marginLeft:3, color: 'white', display: 'block' }}
                        >
                            Counter
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            
                            component={Link}
                            to="/list"
                            sx={{color: 'white', display: 'block' }}
                        >
                            ListView
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default Header
