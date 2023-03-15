import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import "./Alert.css";


//style with jss
const colors={
  success: '#6da06f',
  error: '#f56260'
}
//end style with jss

const useStyles= createUseStyles({
  wrapper: {
    border: ({type}) => `${colors[type]} solid 1px`,
    marginBottom: 15,
    padding: 15,
    position: 'relative',
    '& > h2':{
      color:({type}) =>colors[type],
      margin: [0,0,10,0],
    }
  }
})

//end style with jss

export default function Alert({ children, title, type }) {
  //style with object
  const colors={
    success: '#6da06f',
    error: '#f56260'   
  }

  const style={
    heading: {
      color: colors[type],
      margin: '0 0 10px 0'
    },
    wrapper: {
      border: `${colors[type]} solid 1px`,
      marginBottom: 15,
      padding: 15,
      position: 'relative'
    }
  }

  //end style with object

  //style with jss
  const classes = useStyles({type})
  //end style with jss
  return (
    

    //style with class
    // <div className={`alert-wrapper ${type}`}>
    //   <h2>{title}</h2>
    //   {children}
    // </div>
    
    //style with object
    // <div style={style.wrapper}>
    //   <h2 style={style.heading}>{title}</h2>
    //   {children}
    // </div>

     <div className={classes.wrapper}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
