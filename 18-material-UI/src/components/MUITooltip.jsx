import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function MUITooltip() {
    return (
        <div style={{ margin: "200px", display: "flex", flexDirection: "column" }}>
            <Tooltip title="silmek için tıklayınız" placement='top-start'>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="gulu gulu ">
                <span style={{ marginTop: "100px" }}> DENEME</span>
            </Tooltip>
        </div>
    )
}

export default MUITooltip