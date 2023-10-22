import React from 'react';
import './test.css';
import django from './images/download.png';
import flask from './images/mongo.png';
import flutter from './images/flutter.png';
import ios from './images/ios.png';
import kotlin from './images/kotlin.png';
import asp from './images/mysql.png';
import react from './images/react.png';

function Hello() {
    return (
        <div className='stacks'>
            <h1 className='heading'>Stacks</h1>
            <div class="card-container">
                <img className='testimage' src={django} alt='image'></img>
                <img className='testimage' src={flask} alt='image'></img>
                <img className='testimage' src={kotlin} alt='image'></img>
                <img className='testimage' src={react} alt='image'></img>
                <img className='testimage' src={flutter} alt='image'></img>
                <img className='testimage' src={asp} alt='image'></img>
                <img className='testimage' src={ios} alt='image'></img>
            </div>

        </div>
    );
}

export default Hello;
