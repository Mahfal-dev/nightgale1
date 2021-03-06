import React, { useState } from 'react'
import PianoRoll from './MusicComponents/PianoRoll'
import Night from '../sources/night.mp4'
import './Home.css'
import Nav from './nav.js';
import NavSide from './navSide';
import axios from 'axios';
import PerBeat from './MusicComponents/perbeat';


const Home = () => {
    const [BPM, setBPM] = useState(75);

    const handleIncrement = () => {
        if (BPM < 200) {
            setBPM(BPM => BPM + 1)
            console.log({ BPM })
        }
    }
    const handleDecrement = () => {
        if (BPM > 0) {
            setBPM(BPM => BPM - 1)
            console.log({ BPM })
        }
    }

    const [volume, setVolume] = useState(-50);
    const handleVolume = e => {
        console.log(volume);
        setVolume(e);
    }

    const [pan, setPan] = useState(0);
    const handlePan = e => {
        setPan(e);
    }


    const [toggle, setToggle] = useState(false);
    const updateToggle = () => {
        setToggle(!toggle);
    }

    const [sample, setSample] = useState('');


    const sendData = async () => {
        //localStorage.setItem('')

        const midi = JSON.parse(localStorage.getItem('CURRENT_STEPS'));

        const data = await axios.post(`/api/process_data`, midi)
            .then(function (response) {
                setSample(response.data);
                console.log(response);


                // const a = document.createElement('a');
                // a.href = url;
                // a.download = 'test.txt';
                // a.click(); // triggering it manually
            });
    };

    const [isPlaying, setIsPlaying] = useState(false);

    const [stepVisePlay, setstepVisePlay] = useState(true)


    return (
        <>
            <Nav increment={handleIncrement} decrement={handleDecrement} bpm={BPM} tog={updateToggle} setstepVisePlay={setstepVisePlay} play={isPlaying} setPlay={setIsPlaying} sendMitty={sendData} />
            <NavSide handleVol={handleVolume} vol={volume} handlePan={handlePan} pan={pan} />
            <div className='Container'>
                <div className='videoContainer' >
                    <video className='Video' autoPlay loop muted src={Night} type='video/mp4' />
                </div>
                <PianoRoll bpm={BPM} vol={volume} pan={pan} togg={toggle} play={isPlaying} stepVisePlay={stepVisePlay}   setPlay={setIsPlaying} />
                <div>
                    <PerBeat />
                </div>
            </div>
        </>
    )
}

export default Home
