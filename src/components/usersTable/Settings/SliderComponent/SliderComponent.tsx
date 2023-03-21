import React, {FC} from 'react';
import s from "../Settings.module.scss";
import Box from "@mui/material/Box";
import {Slider} from "@mui/material";


type SliderComponentPropsType = {
    value: number
    step: number
    max: number
    min: number
    onChange: (value: number) => void
}

const SliderComponent: FC<SliderComponentPropsType> = ({min, max, step, value, onChange}) => {
    const onChangeHandler = (e: any) => {
        onChange(e.target.value)
    }

    return (
        <div className={s.sliderBlock}>
            <Box sx={{width: 220}}>
                <Slider
                    value={value}
                    aria-label="step"
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    step={step}
                    marks
                    min={min}
                    max={max}
                    onChange={onChangeHandler}
                />
            </Box>
        </div>
    );
};

export default SliderComponent;