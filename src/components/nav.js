import React, { useState } from 'react'
import "./nav.css";
import logo from '../sources/Nightingale.png'



//fas fa-play
//fas fa-pause
const Nav = (props) => {

    return (
        <>
            <div className='NavContainer'>
                <img className='Logo' alt="logo" src={logo} />
                <h1 className='nameLogo'>Nightingale</h1>
                <button class="playbtn" onClick={() => {
                    props.setstepVisePlay(props.play)
                    props.setPlay(!props.play);

                    if (props.play === true) {
                        // call clearColLabel()
                        // call setCurrentStepIndex(-1)
                    }
                }}>
                    {!props.play ? 'Play' : 'Stop'}
                </button>
                <div className="BPMwrapper">
                    <button onClick={props.decrement} className="bpmBtn">-</button>
                    <div className="BPMcount">{props.bpm} bpm</div>
                    <button onClick={props.increment} className="bpmBtn">+</button>
                </div>
                <button className="generateBtn" onClick={props.sendMitty}>Download</button>
            </div>
        </>
    )
}

export default Nav
