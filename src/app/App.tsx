import React, {useEffect} from 'react';
import UsersTable from "../components/usersTable/UsersTable";
import {useAppDispatch, useAppSelector} from "./store/store";
import {selectorLanguage, selectorNumberOfMistakes} from "./store/selector/selectorApp";
import {fetchUsers} from "./store/reducers/users-reducer";
import {AmountUser} from "../enums/amountUser";

function App() {
    const dispatch = useAppDispatch();
    const seed = useAppSelector(selectorNumberOfMistakes);
    const language = useAppSelector(selectorLanguage);

    useEffect(() => {
        dispatch(fetchUsers({ language, seed, amount: AmountUser.First }));
    }, []);
    return (
        <div>
            <UsersTable/>
        </div>
    );
}

export default App;
