import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function MUIAvatar() {
    return (
        <Stack direction="row" spacing={2}>

            <Avatar src='https://randomuser.me/api/portraits/men/60.jpg'
                sx={{ width: '100px', height: '100px' }}
                alt='MEHMET MAHMUT BURKAY' />

            <Avatar>H</Avatar>
            <Avatar sx={{ bgcolor: 'red' }}>N</Avatar>
            <Avatar sx={{ bgcolor: 'orange' }}>OP</Avatar>


        </Stack>
    )
}

export default MUIAvatar