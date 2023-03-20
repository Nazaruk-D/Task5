import React from 'react';
import {Checkbox, TableCell, TableRow} from "@mui/material";

type RowPropsType = {
    row: any
}

const Row: React.FC<RowPropsType> = ({row}) => {

    return (
            <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.number}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.address}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.phoneNumber}
                </TableCell>
            </TableRow>
    );
};

export default Row;