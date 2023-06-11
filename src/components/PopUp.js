import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './PopUp.css';

export default class PopUp extends Component{
    render() {
        return (
            <div className='popup'>
            <Popup trigger={<button className='popupBtn'> Skills</button>} position="top center" modal nested>    
            {close => (
                
                <div className='modal'>
                    <button className="close" onClick={close}>    
                        &times;        
                    </button>
                    <div className="header"> Choose a skill! </div>
                    
                    <table >
                        <tr>
                        <td><button className='button' id='btn1' onClick={(e) => {e.preventDefault(); window.open('https://charlesstover.github.io/meditative-breathing/');}}>Breathe <br></br><font size="3">Breathe energy in. Hold. Breathe stress out.</font></button></td>
                        <td><button className='button' id='btn2' onClick={(e) => {e.preventDefault(); window.open('Skills/js-expanding-cards/index.html');}}> Zen Cards <br></br><font size="3">A couple adorble exercises for every time of the day!</font></button></td>
                        <td><button className='button' id='btn3' onClick={(e) => {e.preventDefault(); window.open('Skills/memory-game/memory-game.html');}}> Memory <br></br><font size="3">You are never to old for memory!</font> </button></td>
                        </tr>
                        <tr>
                        <td><button className='button' id='btn4' onClick={(e) => {e.preventDefault(); window.open('https://plextora.itch.io/circles');}}> Circles <br></br><font size="3">Create circles and watch them wander.</font></button></td>
                        <td><button className='button' id='btn6' onClick={(e) => {e.preventDefault(); window.open('https://susam.net/invaders.html');}}> Space Invaders <br></br><font size="3">You know it! You love it!<br></br> Enjoy it!</font></button></td>
                        <td><button className='button' id='btn6' onClick={(e) => {e.preventDefault(); window.open('https://mikeleshtembari.github.io/jumping-frogs/');}}> Jumping Frogs <br></br><font size="3">Make these adorble frogs jump to solve the puzzle!</font></button></td>
                        </tr>
                        <tr>
                        <td><button className='button' id='btn7' onClick={(e) => {e.preventDefault(); window.open('https://tether-game.web.app/');}}> Thether <br></br><font size="3">You need to let out some energy? Look no further!</font></button></td>
                        <td><button className='button' id='btn8' onClick={(e) => {e.preventDefault(); window.open('https://rohan-kiratsata.github.io/soothing-sounds/');}}> Soothing sounds <br></br><font size="3">A lovely selection of relaxing soundbits.</font></button></td>
                        <td><button className='button disabled' id='btn9' on><i className="fa fa-plus-circle"></i></button></td>
                        </tr>

                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            

                    </table>

                </div>
            )}
              
            </Popup></div>
        )
    }
}
