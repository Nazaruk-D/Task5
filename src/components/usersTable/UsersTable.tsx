import React from 'react';
import CustomTable from "./CustomTable/CustomTable";
import Header from "../header/Header";
import Settings from "./Settings/Settings";

const UsersTable = () => {

    return (
        <div>
            <Header/>
            <Settings/>
            <CustomTable/>
        </div>
    );
};

export default UsersTable;

