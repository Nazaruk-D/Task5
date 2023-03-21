import React, {useEffect, useState} from 'react';
import s from "./Settings.module.scss"
import {useAppDispatch, useAppSelector} from "../../../app/store/store";
import {useDebounce} from "../../../hooks/useDebounce";
import {resetPage, setLanguage, setMistakes, setSeed} from "../../../app/store/reducers/app-reducer";
import {Language, LanguageType} from "../../../enums/Language";
import {selectorLanguage} from "../../../app/store/selector/selectorApp";
import RadioComponent from "./RadioComponent/RadioComponent";
import SliderComponent from "./SliderComponent/SliderComponent";
import {Slider} from "../../../enums/Slider";
import SeedComponent from "./SeedComponent/SeedComponent";
import InputMistakes from "./InputMistakes/InputMistakes";
import {fetchUsers, fetchUsersSeed, resetUser} from "../../../app/store/reducers/users-reducer";
import {AmountUser} from "../../../enums/amountUser";

const Settings = () => {
    const language = [Language.US, Language.RU, Language.DE]
    const startLanguage = useAppSelector(selectorLanguage)
    const dispatch = useAppDispatch();
    const [languageSettings, setLanguageSettings] = useState<LanguageType>(startLanguage);
    const [mistakes, setMistake] = useState(0);

    const sliderMistakesDebounce = useDebounce(mistakes);

    const onChangeSlider = (value: number) => {
        setMistake(value);
    };


    useEffect(() => {
        dispatch(setMistakes(sliderMistakesDebounce));
    }, [sliderMistakesDebounce]);

    useEffect(() => {
        if (languageSettings) {
            dispatch(resetUser());
            dispatch(setLanguage(languageSettings));
            dispatch(resetPage());
            dispatch(fetchUsers({ amount: AmountUser.First, language: languageSettings }));
        }
    }, [languageSettings]);



    const onSeedChange = (value: number) => {
        dispatch(setSeed(value));
        // dispatch(fetchUsersSeed());
        dispatch(resetUser())
        dispatch(fetchUsers({ amount: AmountUser.First, language: languageSettings }));

    };


    useEffect(() => {
        dispatch(setMistakes(sliderMistakesDebounce));
    }, [sliderMistakesDebounce]);

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
