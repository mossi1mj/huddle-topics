import React from "react";
import { Button } from "@mui/material";
import { auth } from '../firebase';

const SignOutButton = () => {
    return auth.currentUser && (
        <Button
            color='inherit'
            onClick={ () => auth.signOut() }
        >
            sign out
        </Button>
    )
}

export default SignOutButton