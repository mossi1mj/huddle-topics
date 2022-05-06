import React, {useState} from 'react';
import { addDoc, serverTimestamp } from 'firebase/firestore'
import {auth, messagesRef} from "../firebase";
import {Box, Button, TextField} from "@mui/material";

const PostBox = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        await addDoc(messagesRef, {
            title: title,
            description: description,
            createdBy: auth.currentUser.displayName,
            createdOn: serverTimestamp(),
            avatar: auth.currentUser.photoURL
        });
        setTitle('');
        setDescription('');
    }

    return (
        <Box
            component='form'
            autoComplete='on'
            onSubmit={submitHandler}
        >

            <TextField
                id='outlined-multiline-static'
                label='Huddle Topic Title'
                multiline
                rows={1}
                fullWidth
                required
                margin='dense'
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
            />

            <TextField
                id='outlined-multiline-static'
                label="What's Huddle Topic Title"
                multiline
                rows={5}
                fullWidth
                required
                margin='dense'
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
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
