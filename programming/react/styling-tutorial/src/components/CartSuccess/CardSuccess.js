import React from "react";
import { createUseStyles } from "react-jss";
import Alert from "../Alert/Alert";
import "./CartSuccess.css";
//style with JSS
const useStyles=createUseStyles({
  item:{
    marginRight: 20
  },
  wrapper:{
    borderTop : 'black slid 1px',
    display: 'flex',
    flexWrap: 'wrap',
    '& h2': {
      width: '100%',
      color: '#3d15ff'
    }
  }
})


export default function CartSuccess() {
//style with JSS
const classes = useStyles();
//end style with JSS

  //style with object
  const styles={
    header: {
      width: '100%'
    },
    item: {
      marginRight: 20
    },
    wrapper:{
      boderType: 'black solid 1px',
      display: 'flex',
      flexWrap: 'wrap'
    }
  }
  //ens style with object
  return (
    //style with css
    // <Alert title="Added to Card" type="success">
    //   <div className="cart-success-wrapper">
    //     <h2>You have added 3 items:</h2>
    //     <div className="item">
    //       <div>Bananas</div>
    //       <div>Quantity: 2</div>
    //     </div>
    //     <div className="item">
    //       <div>Lettuce</div>
    //       <div>Quantity: 1</div>
    //     </div>
    //   </div>
    // </Alert>

//style with object
//<Alert title="Added to Card" type="success">
//<div style={styles.wrapper}>
//  <h2 style={styles.header}>You have added 3 items:</h2>
//  <div style={styles.item}>
//    <div>Bananas</div>
//    <div>Quantity: 2</div>
//  </div>
//  <div style={styles.item}>
//    <div>Lettuce</div>
//    <div>Quantity: 1</div>
//  </div>
//</div>
//</Alert>

<Alert title="Added to Card" type="success">
<div className={classes.wrapper}>
  <h2>You have added 3 items:</h2>
  <div className={classes.item}>
    <div>Bananas</div>
    <div>Quantity: 2</div>
  </div>
  <div className={classes.item}>
    <div>Lettuce</div>
    <div>Quantity: 1</div>
  </div>
</div>
</Alert>
  );
}
