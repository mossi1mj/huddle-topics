import React from 'react'
import GoogleSignInButton from "./GoogleSignInButton";
import { Lock } from '@mui/icons-material'
import { Typography, Paper, Divider, Grid, Avatar } from "@mui/material";

const SignIn = () => {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Paper elevation={10} style={{ padding: 30, width: 300, margin: '100px auto'}}>
                <Grid align='center'>
                    <Avatar style={{ backgroundColor: 'gray'}}>
                        <Lock />
                    </Avatar>
                    <Typography variant='h4'>
                        Login
                    </Typography>
                </Grid>
                <Divider mb={2} />
                <GoogleSignInButton />
            </Paper>
        </Grid>
    )
}

export default SignIn