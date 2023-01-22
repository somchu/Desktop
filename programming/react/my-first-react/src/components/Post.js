import React,{Component, component} from 'react';
import Comment from './Comment';
class Post extends Component{
    render() {
      return (
        <>
          Hello Class Component is Post!!
          <Comment></Comment>
        </>
      )
    }
}
export default Post;