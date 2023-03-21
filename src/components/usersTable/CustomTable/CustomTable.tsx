import React, {useState} from 'react';
import s from "./CustomTable.module.scss";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import Row from "./Row/Row";
import InfiniteScroll from "react-infinite-scroll-component";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {selectorUsers, selectorUsersFinish} from "../../../store/selector/selectorApp";
import {setPage} from "../../../store/reducers/app-reducer";
import {fetchUsers} from "../../../store/reducers/users-reducer";
import {AmountUser} from "../../../enums/AmountUser";


const CustomTable = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectorUsers);
    const changedUsers = useAppSelector(selectorUsersFinish);
    const [disabled, setDisabled] = useState(false);

    function nextUsersData() {
        setDisabled(true);
        dispatch(setPage());
        dispatch(fetchUsers({amount: AmountUser.Next}));
        setTimeout(() => {
            setDisabled(false);
        }, 1000);
    }

    return (
        <InfiniteScroll className={s.table} dataLength={users.length} next={nextUsersData} hasMore loader
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
                            {changedUsers.map((row, i) => (<Row key={row.id} row={row} index={i}/>))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </InfiniteScroll>
    );
};

export default CustomTable;