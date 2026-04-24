import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MUITabs2 from './MUITabs2';

function MUITabs() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    return (

        <Box sx={{ width: '100%' }}>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Kişisel Bilgiler" />
                    <Tab label="Eğitim Bilgisi" />
                    <Tab label="İletişim" />
                </Tabs>
            </Box>


            <MUITabs2 value={value} index={0}>
                Enes Bayram
            </MUITabs2>

            <MUITabs2 value={value} index={1}>
                Doğuş Üni.
            </MUITabs2>

            <MUITabs2 value={value} index={2}>
                enesbayram166@gmail.com
            </MUITabs2>

        </Box>
    )
}

export default MUITabs