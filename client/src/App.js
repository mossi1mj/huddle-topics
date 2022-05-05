import React, { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase'
import HomePage from './components/HomePage';
import SignIn from "./components/SignIn";

function App() {
    console.log(process.env)
    const [user] = useAuthState(auth)
  return (
      <Fragment>
          { user ? <HomePage /> : <SignIn /> }
      </Fragment>
  );
}

export default App;
