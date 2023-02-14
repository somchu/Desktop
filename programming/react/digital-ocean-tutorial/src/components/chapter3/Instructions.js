import React, { Component } from 'react'
import emoji from '../../logo.svg'

export default class Instructions extends Component{
    render(){
        return(
            <div className='instructions'>
            <img alt="laugjing crying emoji" src={emoji}/>
            <p>Click on and emoji to view the emoji short name.</p>
            </div>
            
        )
    }
}