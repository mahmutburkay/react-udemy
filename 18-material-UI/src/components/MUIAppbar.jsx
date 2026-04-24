import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Stack } from '@mui/material';


function MUIAppbar() {

    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (e) => {
        setAnchorEl(e.currentTarget); //* basılan butonun html etiketini yakaladık 
    }

    const closeMenu = () => {  // menüyü tekrar kapattık 
        setAnchorEl(null);
    }


    const openControl = anchorEl ? true : false; // doluysa true dön boşsa false



    return (

        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <MenuIcon sx={{ color: '#fff' }} />
                </IconButton>

                <Typography variant="h6"> MUI </Typography>

                <Stack direction={'row'} sx={{ marginLeft: 'auto' }}>
                    <Button sx={{ color: '#fff' }}>Anasayfa</Button>
                    <Button sx={{ color: '#fff' }}>Hakkimizda</Button>
                    <Button sx={{ color: '#fff' }} onClick={openMenu} > Ürünler</Button>
                    <Button sx={{ color: '#fff' }}>iletisim</Button>
                </Stack>


                <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu}>
                    <MenuItem onClick={closeMenu}>Lastik</MenuItem>
                    <MenuItem onClick={closeMenu}>Bijon </MenuItem>
                    <MenuItem onClick={closeMenu}>Body Kit</MenuItem>
                </Menu>


            </Toolbar>
        </AppBar >

    )
}

export default MUIAppbar