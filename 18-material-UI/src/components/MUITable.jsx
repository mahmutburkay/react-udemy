import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function MUITable() {

    const rows = [
        { id: 1, firstName: "Enes", lastName: "Bayram", age: 24 },
        { id: 2, firstName: "Gizem", lastName: "Kapar", age: 25 },
        { id: 3, firstName: "Harun", lastName: "Kaymazlap", age: 24 },
        { id: 4, firstName: "Kübra", lastName: "Ozdemir", age: 25 },
        { id: 5, firstName: "Mehmet Mahmut", lastName: "Burkay", age: 25 }
    ]



    return (
        <Table >

            <TableHead>
                <TableRow>

                    <TableCell>ID</TableCell>
                    <TableCell>İSİM</TableCell>
                    <TableCell>SOYİSİM</TableCell>
                    <TableCell>YAŞ</TableCell>

                </TableRow>
            </TableHead>



            <TableBody>
                {
                    rows.map((row, index) => (

                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.firstName}</TableCell>
                            <TableCell>{row.lastName}</TableCell>
                            <TableCell>{row.age}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>


        </Table>
    )
}

export default MUITable