import React, {useEffect} from 'react';
import UsersTable from "../components/usersTable/UsersTable";
import {useAppDispatch, useAppSelector} from "../store/store";
import {selectorLanguage, selectorNumberOfMistakes, selectorStatusApp} from "../store/selector/selectorApp";
import {fetchUsers} from "../store/reducers/users-reducer";
import {AmountUser} from "../enums/AmountUser";
import {setAppStatusAC} from "../store/reducers/app-reducer";

function App() {
    const dispatch = useAppDispatch();
    const seed = useAppSelector(selectorNumberOfMistakes);
    const language = useAppSelector(selectorLanguage);

    useEffect(() => {
        dispatch(setAppStatusAC("succeeded"))
        dispatch(fetchUsers({ language, seed, amount: AmountUser.First }));
    }, []);

    return (
        <div>
            <UsersTable/>
        </div>
    );
}

export default App;
