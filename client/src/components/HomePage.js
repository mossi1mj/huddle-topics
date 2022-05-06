import React, { Fragment } from "react";
import NavBar from "./NavBar";
import {Grid} from "@mui/material";
import PostBox from "./PostBox";
import Feed from "./Feed"

const HomePage = () => {
    return (
        <Fragment>
            <NavBar/>
            <Grid container spacing={2} justifyContent='center' alignItems='flex-start'>
                <Grid item xs={12} sm={12} md={3.5}>
                    <PostBox />
                </Grid>

                <Grid item xs={12} sm={12} md={5}>
                    <Feed/>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default HomePage