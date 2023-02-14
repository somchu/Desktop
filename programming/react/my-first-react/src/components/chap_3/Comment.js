import React from 'react';

const Comment = (props) =>{
    return(<>
        <div>
            <span>{props.data} from id: {props.userId}</span>
        </div>
    </>)

}
export default  Comment;