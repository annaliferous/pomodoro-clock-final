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
                        <button className='button' id='btn1' onClick={(e) => {e.preventDefault(); window.open('./Skills/Breathe/breathe.html');}}>Breathe <br></br><font size="3">An exercise to help you to calm down</font></button>
                        <button className='button' id='btn2' onClick={(e) => {e.preventDefault(); window.open('./Skills/js-expanding-cards/index.html');}} 
                        /*onClick={window.open("./Skills/Breathe/index.html", "_blank")}*/
                        /*window.location.assign("./Skills/Breathe/breathe.html")*/ > Work </button>
                        <button className='button' id='btn3' onClick={(e) => {e.preventDefault(); window.open('./Skills/memory-game/memory-game.html');}}> Work </button>
                        <button className='button' id='btn4' onClick={(e) => {e.preventDefault(); window.open('./Skills/circles/circles.html');}}> Work </button>
                        <button className='button' id='btn6' onClick={(e) => {e.preventDefault(); window.open('./Skills/invaders/invaders.html');}}> Work </button>
                        <button className='button' id='btn6' onClick={(e) => {e.preventDefault(); window.open('./Skills/paint-by-numbers/index.html');}}> Work </button>
                        <button className='button' id='btn7' onClick={(e) => {e.preventDefault(); window.open('./Skills/tether/index.html');}}> Work </button>
                        <button className='button' id='btn8' onClick={(e) => {e.preventDefault(); window.open('./Skills/soothing-sounds/index.html');}}> Work </button>
                        <button className='button disabled' id='btn9' on><i className="fa fa-plus-circle"></i></button>

                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            

                    </div>

                </div>
            )}
              
            </Popup>
        )
    }
}