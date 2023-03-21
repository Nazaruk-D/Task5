import React, {ChangeEvent, FC} from 'react';
import s from "../Settings.module.scss";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";

type InputMistakesPropsType = {
    value: number
    min: number
    max: number
    onChange: (value: number) => void
}

const InputMistakes: FC<InputMistakesPropsType> = ({min, max, value, onChange}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(Number(e.target.value))
    }

    return (
        <div className={s.inputBlock}>
            <Box component="form" sx={{'& .MuiTextField-root': {m: 1, width: '16ch'},}} noValidate
                 autoComplete="off">
                <TextField
                    value={value}
                    id="outlined-number"
                    label="Number of mistakes"
                    type="number"
                    onChange={onChangeHandler}
                    InputLabelProps={{shrink: true}}
                    InputProps={{inputProps: {min, max}}}
                />
            </Box>
        </div>
    );
};

export default InputMistakes;