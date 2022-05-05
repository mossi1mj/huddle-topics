import React, { Fragment } from "react";
import {AppBar, Box, Toolbar, Typography, Avatar, Grid, Button} from "@mui/material";
import {Twitter} from "@mui/icons-material";
import SignOutButton from "./SignOutButton";

const NavBar = () => {
    return (
        <Fragment>
            <Box mb={4}>
                <AppBar position='static' elevation={2}>
                    <Toolbar>
                        <Box mr={2} style={{ flexGrow: 1 }}>
                            <Twitter fontSize='large'/>
                        </Box>
                        <SignOutButton/>
                        <Typography component={'span'}>
                            <Avatar src={ localStorage.getItem("picture") } />
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </Fragment>
    )
}

export default NavBar