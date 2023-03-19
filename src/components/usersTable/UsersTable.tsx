import React, {useEffect} from 'react';
import {useAppDispatch} from "../../app/store/store";
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

