import React, {ChangeEvent, FC} from 'react';
import s from "../Settings.module.scss";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {Language} from "../../../../enums/Language";

type RadioComponentPropsType = {
    value: string[]
    languageSettings: Language
    onChange: (value: Language) => void
}


const RadioComponent: FC<RadioComponentPropsType> = ({value, languageSettings, onChange}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value as Language);
    }

    return (
        <div className={s.radioBlock}>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group" onChange={onChangeHandler}>
                {value.map(language => <FormControlLabel key={language} value={language}
                                                         control={<Radio/>}
                                                         label={language.toUpperCase()}
                                                         style={{marginRight: "30px"}}
                                                         checked={language === languageSettings}/>)}
            </RadioGroup>
        </div>
    );
};

export default RadioComponent;