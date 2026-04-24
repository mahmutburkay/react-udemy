import React from 'react'
import Container from '@mui/material/Container';

function PageContainer({ children }) {
    return (
        <Container maxWidth="lg">{children}</Container> //* sağdan ve soldan boşluk bırakarak ortala (header ı )
    )
}

export default PageContainer

