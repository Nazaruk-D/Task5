import React from 'react';
import CustomTable from "./CustomTable/CustomTable";
import Header from "../header/Header";
import Settings from "./Settings/Settings";
import CsvDownload from "./CSVDownload/CSVDownload";

const UsersTable = () => {
    return (
        <div>
            <Header/>
            <Settings/>
            <CustomTable/>
            <CsvDownload/>
        </div>
    );
};

export default UsersTable;

