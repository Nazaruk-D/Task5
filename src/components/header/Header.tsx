import React from 'react';
import s from "./Header.module.scss"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {LinearProgress} from "@mui/material";
import {useAppSelector} from "../../store/store";
import {selectorStatusApp} from "../../store/selector/selectorApp";

const Header = () => {
    const status = useAppSelector(selectorStatusApp)

    return (
        <Box sx={{flexGrow: 1}} className={s.headerContainer}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Task #5
                    </Typography>
                </Toolbar>
            </AppBar>
            {
                status === "loading" && <LinearProgress color="secondary"/>
            }
        </Box>
    );
};

export default Header;