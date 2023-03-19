import React, {useRef, useState} from 'react';
import s from "./CustomTable.module.scss";
import {Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import Row from "./Row/Row";
import InfiniteScroll from "react-infinite-scroll-component";


const CustomTable = () => {
    const ref = useRef(null);

    const users = [
        {number: "1", id: "sdsf23", name: "Dmitry Nazaruk", address: "Minsk Makaenka 12b", phone: "+375(29)1111111"},
        {number: "1", id: "sdsf23", name: "Dmitry Nazaruk", address: "Minsk Makaenka 12b", phone: "+375(29)1111111"},
        {number: "1", id: "sdsf23", name: "Dmitry Nazaruk", address: "Minsk Makaenka 12b", phone: "+375(29)1111111"},
        {number: "1", id: "sdsf23", name: "Dmitry Nazaruk", address: "Minsk Makaenka 12b", phone: "+375(29)1111111"},
        {number: "1", id: "sdsf23", name: "Dmitry Nazaruk", address: "Minsk Makaenka 12b", phone: "+375(29)1111111"},
        {number: "1", id: "sdsf23", name: "Dmitry Nazaruk", address: "Minsk Makaenka 12b", phone: "+375(29)1111111"},
        {number: "1", id: "sdsf23", name: "Dmitry Nazaruk", address: "Minsk Makaenka 12b", phone: "+375(29)1111111"},
        {number: "1", id: "sdsf23", name: "Dmitry Nazaruk", address: "Minsk Makaenka 12b", phone: "+375(29)1111111"},
        {number: "1", id: "sdsf23", name: "Dmitry Nazaruk", address: "Minsk Makaenka 12b", phone: "+375(29)1111111"},
        {number: "1", id: "sdsf23", name: "Dmitry Nazaruk", address: "Minsk Makaenka 12b", phone: "+375(29)1111111"},
        {number: "1", id: "sdsf23", name: "Dmitry Nazaruk", address: "Minsk Makaenka 12b", phone: "+375(29)1111111"},
        {number: "1", id: "sdsf23", name: "Dmitry Nazaruk", address: "Minsk Makaenka 12b", phone: "+375(29)1111111"},

    ]


    const [disabled, setDisabled] = useState(false);

    function nextUsersData() {
        setDisabled(true);
        // dispatch(setPage());
        // dispatch(getUsers({ amount: AmountUser.Other }));
        // setTimeout(() => {
        //     setDisabled(false);
        // }, DELAY);
        console.log(123123)
    }

    return (
        <InfiniteScroll ref={ref} className={s.table} dataLength={users.length} next={nextUsersData} hasMore loader
                        scrollThreshold={0.99} height={520}>
            <div className={s.tableContainer}>
                <TableContainer component={Paper} className={s.tableBlock}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead className={s.xxx}>
                            <TableRow style={{backgroundColor: '#EFEFEF'}}>
                                <TableCell style={{fontWeight: '600'}} width={"10%"}>
                                    №
                                </TableCell>
                                <TableCell style={{fontWeight: '600'}} width={"10%"}>
                                    Id
                                </TableCell>
                                <TableCell style={{fontWeight: '600'}} width={"25%"}>
                                    Name
                                </TableCell>
                                <TableCell align="left" style={{fontWeight: '600'}} width={"35%"}>
                                    Address
                                </TableCell>
                                <TableCell align="left" style={{fontWeight: '600'}} width={"20%"}>
                                    Phone number
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>

                            {users.map((row) => (
                                <Row key={row.id} row={row}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </InfiniteScroll>

    );
};

export default CustomTable;