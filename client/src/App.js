import React, { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, messagesRef} from './firebase'
import HomePage from './components/HomePage';
import SignIn from "./components/SignIn";

function App() {
    console.log(process.env)
    console.log('hello', messagesRef)
    const [user] = useAuthState(auth)
  return (
      <Fragment>
          { user ? <HomePage /> : <SignIn /> }
      </Fragment>
  );
}

export default App;
