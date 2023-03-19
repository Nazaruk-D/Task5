import React from 'react';
import s from "./Settings.module.scss"
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider, TextField} from "@mui/material";
import Box from '@mui/material/Box';

const Settings = () => {

    function valuetext(value: number) {
        return `${value}`;
    }

    return (
        <div className={s.settingsContainer}>
            <div className={s.settingsBlock}>
                <div className={s.radioBlock}>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group">
                            <FormControlLabel value="EN" control={<Radio/>} label="EN" style={{marginRight: "35px"}}/>
                            <FormControlLabel value="RUS" control={<Radio/>} label="RUS" style={{marginRight: "35px"}}/>
                            <FormControlLabel value="UKR" control={<Radio/>} label="UKR"/>
                        </RadioGroup>
                </div>
                <div className={s.sliderBlock}>
                    <Box sx={{width: 280}}>
                        <Slider
                            aria-label="step"
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={0.25}
                            marks
                            min={0}
                            max={10}
                        />
                    </Box>
                </div>
                <div className={s.inputBlock}>
                    <Box component="form" sx={{'& .MuiTextField-root': {m: 1, width: '16ch'},}} noValidate
                         autoComplete="off">
                        <TextField
                            id="outlined-number"
                            label="Number of mistakes"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                </div>
                <div className={s.seedBlock}>
                    <Box component="form" sx={{'& .MuiTextField-root': {m: 1, width: '12ch'},}} noValidate
                         autoComplete="off">
                        <TextField
                            id="outlined-number"
                            label="Seed"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <Button variant="contained">Contained</Button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
