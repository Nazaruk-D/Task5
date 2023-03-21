import React, {useEffect, useState} from 'react';
import s from "./Settings.module.scss"
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {useDebounce} from "../../../hooks/useDebounce";
import {resetPage, setLanguage, setMistakes, setSeed} from "../../../store/reducers/app-reducer";
import {Language, LanguageType} from "../../../enums/Language";
import {selectorLanguage, selectorNumberOfMistakes, selectorUsers} from "../../../store/selector/selectorApp";
import RadioComponent from "./RadioComponent/RadioComponent";
import SliderComponent from "./SliderComponent/SliderComponent";
import {Slider} from "../../../enums/Slider";
import SeedComponent from "./SeedComponent/SeedComponent";
import InputMistakes from "./InputMistakes/InputMistakes";
import {fetchUsers, resetUser} from "../../../store/reducers/users-reducer";
import {AmountUser} from "../../../enums/AmountUser";
import {generateErrors} from "../../../utils/mistakes-utils";
import {resetChangedUsers, setChangedUsers} from "../../../store/reducers/changedUsers-reducer";

const Settings = () => {
    const dispatch = useAppDispatch();
    const language = [Language.US, Language.RU, Language.DE]
    const users = useAppSelector(selectorUsers);
    const languageApp = useAppSelector(selectorLanguage);
    const startLanguage = useAppSelector(selectorLanguage)
    const mistakesFromApp = useAppSelector(selectorNumberOfMistakes)
    const [languageSettings, setLanguageSettings] = useState<LanguageType>(startLanguage);
    const [mistakes, setMistake] = useState(mistakesFromApp);
    const sliderMistakesDebounce = useDebounce(mistakes);

    const onChangeSlider = (value: number) => {
        setMistake(value);
    };

    const onSeedChange = (value: number) => {
        dispatch(setSeed(value));
        dispatch(resetUser())
        dispatch(fetchUsers({ amount: AmountUser.First, language: languageSettings }));
    };

    useEffect(() => {
        dispatch(setMistakes(sliderMistakesDebounce));
    }, [sliderMistakesDebounce, dispatch]);

    useEffect(() => {
        if (languageSettings) {
            dispatch(resetUser());
            dispatch(setMistakes(0))
            dispatch(setLanguage(languageSettings));
            dispatch(resetPage());
            dispatch(fetchUsers({ amount: AmountUser.First, language: languageSettings }));
        }
    }, [languageSettings, dispatch]);

    useEffect(() => {
        dispatch(setMistakes(sliderMistakesDebounce));
    }, [sliderMistakesDebounce, dispatch]);

    useEffect(() => {
        setMistake(mistakesFromApp)
    }, [mistakesFromApp]);

    useEffect(() => {
        const newUsers = users.map(({id, number, name, address, phoneNumber, seedNumber}) => ({
            id: id,
            number: number,
            name: generateErrors(name, mistakes, languageApp, seedNumber),
            address: generateErrors(address, mistakes, languageApp, seedNumber),
            phoneNumber: generateErrors(phoneNumber, mistakes, languageApp, seedNumber),
        }))
        dispatch(resetChangedUsers())
        dispatch(setChangedUsers({users: newUsers}))
    }, [mistakes, dispatch])

    return (
        <div className={s.settingsContainer}>
            <div className={s.settingsBlock}>
                <RadioComponent value={language} onChange={setLanguageSettings} languageSettings={languageSettings}/>
                <SliderComponent value={mistakes} onChange={onChangeSlider} step={Slider.Step} max={Slider.Max} min={Slider.Min}/>
                <InputMistakes value={mistakes} onChange={onChangeSlider} min={Slider.Min} max={Slider.MaxMistakes}/>
                <SeedComponent onSeedChange={onSeedChange}/>
            </div>
        </div>
    );
};

export default Settings;
