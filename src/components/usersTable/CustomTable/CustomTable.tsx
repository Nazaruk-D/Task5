import React, {useRef, useState} from 'react';
import s from "./CustomTable.module.scss";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import Row from "./Row/Row";
import InfiniteScroll from "react-infinite-scroll-component";
import {useAppDispatch, useAppSelector} from "../../../app/store/store";
import {
    selectorLanguage,
    selectorNumberOfMistakes,
    selectorStatusApp,
    selectorUsers
} from "../../../app/store/selector/selectorApp";
import {setPage} from "../../../app/store/reducers/app-reducer";
import {generateErrors} from "../../../utils/mistakes-utils";
import {fetchUsers} from "../../../app/store/reducers/users-reducer";


const CustomTable = () => {
    const dispatch = useAppDispatch();
    const mistakes = useAppSelector(selectorNumberOfMistakes);
    const language = useAppSelector(selectorLanguage);
    const status = useAppSelector(selectorStatusApp);
    const users = useAppSelector(selectorUsers);
    const [disabled, setDisabled] = useState(false);
    const ref = useRef(null);


    function nextUsersData() {
        setDisabled(true);
        dispatch(setPage());
        dispatch(fetchUsers({amount: 10}));
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
                                    №
                                </TableCell>
                                <TableCell style={{fontWeight: '600'}} width={"10%"}>
                                    Id
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
                            {users.map(({id, number, name, address, phoneNumber, seedNumber}) => ({
                                id: id,
                                number: number,
                                name: generateErrors(name, mistakes, language, seedNumber),
                                address: generateErrors(address, mistakes, language, seedNumber),
                                phoneNumber: generateErrors(phoneNumber, mistakes, language, seedNumber),
                            })).map((row, i) => (
                                <Row key={row.id} row={row} index={i}/>
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