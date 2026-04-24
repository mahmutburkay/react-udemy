import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function MUIDialog() {

    const [dialogOpen, SetDialogOpen] = useState(false);

    const types = {
        YES: "YES",
        NO: "NO"
    }

    const result = (typeParam) => {
        console.log("kullanıcı sonucu : ", typeParam)

        if (typeParam == types.YES) {
            console.log("evet beni seviyormus :D")
        }

        SetDialogOpen(false);

    }


    return (
        <div>
            <Button variant='contained' color='info' sx={{ margin: '350px' }}
                onClick={() => SetDialogOpen(true)}>Mesajı göster</Button>


            <Dialog open={dialogOpen} onClose={() => SetDialogOpen(false)}>

                <DialogTitle>SORU</DialogTitle>

                <DialogContent>
                    <DialogContentText>Enes Bayram ı Seviyor musunuz ?</DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => result(types.YES)}>Evet</Button>
                    <Button onClick={() => result(types.NO)}>Hayır</Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}

export default MUIDialog