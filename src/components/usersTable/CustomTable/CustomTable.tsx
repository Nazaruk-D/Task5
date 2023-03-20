import React, {useEffect, useRef, useState} from 'react';
import s from "./CustomTable.module.scss";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import Row from "./Row/Row";
import InfiniteScroll from "react-infinite-scroll-component";
import {useAppDispatch, useAppSelector} from "../../../app/store/store";
import {selectorLanguage, selectorNumberOfMistakes, selectorStatusApp} from "../../../app/store/selector/selectorApp";
import {fetchUsers, setPage} from "../../../app/app-reducer";
import {generateErrors} from "../../../utils/mistakes-utils";
import {Language} from "../../../enums/Language";
import {UserType} from "../../../api/usersAPI";


const CustomTable = () => {
    const dispatch = useAppDispatch();
    const mistakes = useAppSelector(selectorNumberOfMistakes);
    const language = useAppSelector(selectorLanguage);
    const status = useAppSelector(selectorStatusApp);
    // const users = useAppSelector(selectorUsers);
    const [disabled, setDisabled] = useState(false);
    const ref = useRef(null);


    const users: UserType[] = [
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
        {
            id: "1",
            number: "sdsf23",
            name: "Dmitry Nazaruk",
            address: "Minsk Makaenka 12b",
            phoneNumber: "+375(29)1111111"
        },
    ]


    function nextUsersData() {
        setDisabled(true);
        dispatch(setPage());
        dispatch(fetchUsers({amount: 10}));
        console.log(1)
        setTimeout(() => {
            setDisabled(false);
        }, 1000);
    }

    return (
        <InfiniteScroll ref={ref} className={s.table} dataLength={users.length} next={nextUsersData} hasMore loader
                        scrollThreshold={0.99} height={520}>
            <div className={s.tableContainer}>
                <TableContainer component={Paper} className={s.tableBlock}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{backgroundColor: '#EFEFEF'}}>
                                <TableCell style={{fontWeight: '600'}} width={"5%"}>
                                    Id
                                </TableCell>
                                <TableCell style={{fontWeight: '600'}} width={"10%"}>
                                    №
                                </TableCell>
                                <TableCell style={{fontWeight: '600'}} width={"25%"}>
                                    Name
                                </TableCell>
                                <TableCell align="left" style={{fontWeight: '600'}} width={"40%"}>
                                    Address
                                </TableCell>
                                <TableCell align="left" style={{fontWeight: '600'}} width={"20%"}>
                                    Phone number
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(({id, number, name, address, phoneNumber}) => ({
                                id: id,
                                number: generateErrors(number, mistakes, language),
                                name: generateErrors(name, mistakes, language),
                                address: generateErrors(address, mistakes, language),
                                phoneNumber: generateErrors(phoneNumber, mistakes, language),
                            })).map((row) => (
                                <Row key={row.id} row={row}/>
                            ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </InfiniteScroll>

    );
};

export default CustomTable;