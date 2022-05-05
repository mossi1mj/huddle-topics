import React, { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase'
import SignIn from "./components/SignIn";

function App() {
    console.log(process.env)
    const [user] = useAuthState(auth)
  return (
      <Fragment>
          { user ? <></> : <SignIn /> }
      </Fragment>
  );
}

export default App;
