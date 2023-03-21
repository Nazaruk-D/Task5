import React, {useEffect} from 'react';
import CustomTable from "./CustomTable/CustomTable";
import Header from "../header/Header";
import Settings from "./Settings/Settings";
import CsvDownload from "./CSVDownload/CSVDownload";
import {generateErrors} from "../../utils/mistakes-utils";
import {resetChangedUsers, setChangedUsers} from "../../store/reducers/changedUsers-reducer";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {
    selectorLanguage,
    selectorNumberOfMistakes,
    selectorUsers,
} from "../../store/selector/selectorApp";

const UsersTable = () => {
    const dispatch = useAppDispatch();
    const mistakes = useAppSelector(selectorNumberOfMistakes);
    const language = useAppSelector(selectorLanguage);
    const users = useAppSelector(selectorUsers);

    useEffect(() => {
        const newUsers = users.map(({id, number, name, address, phoneNumber, seedNumber}) => ({
            id: id,
            number: number,
            name: generateErrors(name, mistakes, language, seedNumber),
            address: generateErrors(address, mistakes, language, seedNumber),
            phoneNumber: generateErrors(phoneNumber, mistakes, language, seedNumber),
        }))
        dispatch(resetChangedUsers())
        dispatch(setChangedUsers({users: newUsers}))
    }, [users, dispatch])

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

