import React, {ChangeEvent, FC, useState} from 'react';
import s from "../Settings.module.scss";
import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";

type SeedComponentPropsType = {
    onSeedChange: (value: number) => void
}

const SeedComponent: FC<SeedComponentPropsType> = ({onSeedChange}) => {
    const [value, setValue] = useState(0);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        if (e.target.value) {
            setValue(Number(e.target.value));
        }
    }

    const onClickHandler= () => {
        onSeedChange(value)
    }

    return (
        <div className={s.seedBlock}>
            <Box component="form" sx={{'& .MuiTextField-root': {m: 1, width: '12ch'},}} noValidate
                 autoComplete="off">
                <TextField
                    value={value}
                    onChange={onChangeHandler}
                    id="outlined-number"
                    label="Seed"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
            <Button variant="contained" onClick={onClickHandler}>Set</Button>
        </div>
    );
};

export default SeedComponent;