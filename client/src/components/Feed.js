import {useEffect, useState} from "react";
import { onSnapshot } from 'firebase/firestore'
import {order} from "../firebase";
import { Box, Container } from "@mui/material";
import Message from "./Message";

const Feed = () => {
    const [ cards, setCards] = useState([]);

    useEffect(() => {
        onSnapshot(order, (view) => {
            let messages= []
            view.docs.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            console.log(messages)
            setCards(messages)
        })
    }, [])


    return (
        <Box>
            { cards.map(msg => (
                <Container key={msg.id}>
                        <Message message={msg} />
                </Container>
            )) }
        </Box>
    )
}

export default Feed