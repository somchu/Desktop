import React, { Component } from 'react'

//arrow function components
// const Post = (props) =>{
//     console.log(props.studentname);
//     return(
//         <>
//             <p>student name is {props.studentname}</p>
//         </>
//     )
// }

//class components
// class Post extends Component{
  

//     render(){
//        console.log(this.props);
//         return(
 
//             <>
//                 <p>class component student name is {this.props.studentname} age is {this.props.age}</p>
//                 <p>{this.props.children}</p>
//             </>
//         )
//     }
// }

const Post = (props) =>{
    return(
        <>
            <h2>Post Id: {props.id}</h2>
            <p> Comment: </p>
            <p>{props.children}</p>
        </>

    )
}
export default Post;