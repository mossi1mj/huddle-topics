import {useState} from "react";
import {collection, updateDoc} from 'firebase/firestore'
import { db } from "../firebase";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {Cancel, Done, Edit} from "@mui/icons-material";

const Message = ({ message }) => {
    const [editMode, setEditMode] = useState(false);
    const [messageTitle, setMessageTitle] = useState('');
    const [messageDescription, setMessageDescription] = useState('');

    const changeEditMode = () => {
        setEditMode((!editMode))
    }
    const titleHandler = (e) => {
      setMessageTitle(e.target.value)
    }
    const descriptionHandler = (e) => {
      setMessageDescription(e.target.value)
    }

    const inputValidation = (input, message) => {
      if (input === '')
          return message
        else
            return input
    }

    const subHeader = () => {
      return (
          <ul
              style={{
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  color: 'black'
              }}
          >
              <li>
                  { message.createdOn }
              </li>
              <li>
                  { message.createdBy }
              </li>
          </ul>
      )
    }

    const docRef = collection(db, "messages")
    const editHandler = async() => {
      await updateDoc(docRef, {
          title: inputValidation(messageTitle, message.title),
          description: inputValidation(messageDescription, message.description)
      })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        changeEditMode();
    }

    const editView = () => {
        return (
            <Card
                component='form'
                autoCorrect='on'
                onSubmit={submitHandler}
            >
                <CardHeader
                    avatar={ <Avatar src={ message.avatar } /> }
                    title={ <TextField
                        label='Edit Huddle Topic'
                        multiline
                        rows={2}
                        fullWidth
                        margin='dense'
                        defaultValue={ message.title }
                        onChange={titleHandler}
                    />
                        }
                    subheader={ subHeader() }
                />

                <CardContent>
                    <TextField
                        label="What's Huddle Topic Title"
                        multiline
                        rows={5}
                        fullWidth
                        required
                        margin='dense'
                        defaultValue={ message.description }
                        onChange={descriptionHandler}
                        />
                </CardContent>

                <CardActions>
                    <Tooltip title='Approve' placement='left-end'>
                        <IconButton type='submit' onClick={editHandler}>
                            <Done />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='Cancel' placement='right-end'>
                        <IconButton onClick={changeEditMode}>
                            <Cancel />
                        </IconButton>
                    </Tooltip>

                </CardActions>
            </Card>
        )
    }
    const defaultView = () => {
        return (
            <Card sx={{ marginTop: 1, marginBottom: 1 }}>
                <CardHeader
                    avatar={ <Avatar src={ message.avatar }/> }
                    title={<b>{ message.title }</b>}
                    subheader={subHeader()}
                />
                <CardContent>
                    <Typography>
                        { message.description }
                    </Typography>
                </CardContent>

                <CardActions>
                    <IconButton>
                        <Done/>
                    </IconButton>
                    <IconButton type='submit' onClick={changeEditMode}>
                        <Edit/>
                    </IconButton>
                </CardActions>

            </Card>
        )
    }
    return ( editMode ? editView() : defaultView() )
}

export default Message