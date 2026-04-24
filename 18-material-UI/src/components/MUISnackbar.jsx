import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function MUISnackbar() {

    const [openSnackBar, setOpenSnackBar] = useState(false);

    const handleClick = () => {   // açma metodu
        setOpenSnackBar(true);
    }

    const handleClose = () => {  // kapatma metodu 
        setOpenSnackBar(false)
    }



    const action = (
        <>
            <Button size='small' color='info' onClick={handleClose}>Kapat</Button>

            <IconButton sx={{ color: 'white' }} onClick={handleClose} >
                <CloseIcon />
            </IconButton>
        </>
    )


    return (
        <div>
            <Button onClick={handleClick}>Snackbar ı aç </Button>

            <Snackbar open={openSnackBar}
                message="Hata Oluştu"
                action={action}
                autoHideDuration={3000} // 3 sn sonra onClose u tetikler
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />


        </div>
    )
}

export default MUISnackbar