import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './PopUp.css';

export default class PopUp extends Component{
    render() {
        return (
            <Popup trigger={<button className='popupBtn'> Trigger</button>} position="top center" modal nested>    
            {close => (
                
                <div className='modal'>
                    <button className="close" onClick={close}>    
                        &times;        
                    </button>
                    <div className="header"> Choose a skill! </div>
                    
                    <div className='skills'>
                        <button className='button' id='btn1' onClick={(e) => {e.preventDefault(); window.open('http://google.com', '_blank');}}> Work </button>
                        <button className='button' id='btn2' onClick={(e) => {e.preventDefault(); window.open('./Skills/Breathe/breathe.html');}} 
                        /*onClick={window.open("./Skills/Breathe/index.html", "_blank")}*/
                        /*window.location.assign("./Skills/Breathe/breathe.html")*/ > Work </button>
                        <button className='button' id='btn3' onClick={(e) => {e.preventDefault(); window.location.href='https://www.youtube.com/watch?v=ZF7-JqMM21A';}}> Work </button>
                        <button className='button' id='btn4'> Work </button>
                        <button className='button' id='btn6'> Work </button>
                        <button className='button' id='btn6'> Work </button>
                        <button className='button' id='btn7'> Work </button>
                        <button className='button' id='btn8'> Work </button>
                        <button className='button disabled' id='btn9' on><i className="fa fa-plus-circle"></i></button>

                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            

                    </div>

                </div>
            )}
              
            </Popup>
        )
    }
}