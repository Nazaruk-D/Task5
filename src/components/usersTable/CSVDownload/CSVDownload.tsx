import React from 'react';
import s from "./CsvDownload.module.scss"
import {CSVLink} from "react-csv";
import {useAppSelector} from "../../../app/store/store";
import {selectorUsers} from "../../../app/store/selector/selectorApp";
import {Button} from "@mui/material";

const CsvDownload = () => {
    const users = useAppSelector(selectorUsers)

    const headers = [
        {label: "Id", key: "id"},
        {label: "Name", key: "name"},
        {label: "Address", key: "address"},
        {label: "Phone number", key: "phoneNumber"},
    ];

    return (
        <div className={s.csvDownloadContainer}>
            <div className={s.csvDownloadBlock}>
                <CSVLink filename={"Users.csv"} data={users} headers={headers} style={{textDecoration: "none"}}>
                    <Button variant="contained">Export to CSV</Button>
                </CSVLink>
            </div>
        </div>

    );
};

export default CsvDownload;