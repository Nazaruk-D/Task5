import React from 'react';
import {TableCell, TableRow} from "@mui/material";
import {UserType} from "../../../../api/usersAPI";

type RowPropsType = {
    row: UserType
    index: number
}

const Row: React.FC<RowPropsType> = ({row, index}) => {

    return (
        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell component="th" scope="row">
                {index + 1}
            </TableCell>
            <TableCell component="th" scope="row">
                {row.id}
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