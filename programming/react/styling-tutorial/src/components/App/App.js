import React from "react";
import { createUseStyles } from "react-jss"; //style with JSS

import "./App.css";
import Alert from "../Alert/Alert";
import CartSuccess from "../CartSuccess/CardSuccess"; 
//style with JSS
const useStyles=createUseStyles({
  wrapper: {
    padding: 20,
  }
})

function App() {
  //style with object
  const wrapper = {
    padding: 20
  }
  
const classes=useStyles();
  return (

    //style with css
    // <div className="wrapper">
    //   <Alert title="Item Not Added" type="error">
    //     <div>Your item are out of stock.</div>
    //   </Alert>
    //   <CartSuccess/>
    // </div>

    //style with object
    //  <div style={wrapper}>
    //   <Alert title="Item Not Added" type="error">
    //     <div>Your item are out of stock.</div>
    //   </Alert>
    //   <CartSuccess/>
    // </div>

    //style with JSS
    <div className={classes.wrapper}>
    <Alert title="Item Not Added" type="error">
      <div>Your item are out of stock.</div>
    </Alert>
    <CartSuccess/>
  </div>
  );
}

export default App;
