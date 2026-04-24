import React from 'react'
import Badge from '@mui/material/Badge';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';



function MUIBadge() {
    return (
        <div style={{ margin: '100px' }}>

            <Badge badgeContent={5} color='primary' max={9}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>

                <AttachEmailIcon />

            </Badge>

        </div>
    )
}

export default MUIBadge