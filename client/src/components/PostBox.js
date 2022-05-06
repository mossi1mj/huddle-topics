import React from 'react';
import {Box, Button, TextField} from "@mui/material";

const PostBox = () => {
    return (
        <Box
            component='form'
            autoComplete='on'
            onSubmit={}>
            <TextField
                id='outlined-multiline-static'
                label='Huddle Topic Title'
                multiline
                rows={1}
                fullWidth
                required
                margin='dense'
            />
            <TextField
                id='outlined-multiline-static'
                label="What's Huddle Topic Title"
                multiline
                rows={5}
                fullWidth
                required
                margin='dense'
            />
            <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
            >
                Submit
            </Button>
        </Box>
    )
}

export default PostBox
