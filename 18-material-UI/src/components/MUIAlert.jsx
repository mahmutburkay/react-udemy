import React from "react"
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function MUIAlert() {
    return (
        <div style={{ margin: "200px" }}>

            <Alert sx={{ width: '250px' }} severity="success">Bilgilendirme Mesajı</Alert>

            <Alert sx={{ width: '250px', marginTop: '10px' }} severity="error"
                variant="filled">Hata Mesajı</Alert>

            <Alert sx={{ width: '250px', marginTop: '10px' }} severity="warning"
                variant="outlined">Uyarı Mesajı</Alert>

            <Alert sx={{ width: '250px', marginTop: '10px' }} severity="info"
                variant="standard">Bilgilendirme Mesajı</Alert>




            <Alert sx={{ width: '250px', marginTop: '50px' }}>
                <AlertTitle>Başarılı</AlertTitle>
                Bilgilendirme Mesajı
            </Alert>


        </div>
    )
}

export default MUIAlert