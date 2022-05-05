import React from "react";
import { googleLogin} from "../firebase";
import { Google } from "@mui/icons-material";
import { Button, Typography, Grid } from "@mui/material";

const GoogleSignInButton = () => {
    return (
        <Grid container direction='column'>
            <Button
                variant='contained'
                color='success'
                style={{ margin: '10px 0'}}
                onClick={googleLogin}
            >
                <Grid mr={3}>
                    <Google fontSize='large' />
                </Grid>
                <Typography>
                    sign in with google
                </Typography>
            </Button>
        </Grid>
    )
}

export default GoogleSignInButton