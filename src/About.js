import React, {Component} from 'react';

import Profile from './assets/Profile1.png';

class About extends Component {
    render(){
        return (
            <div>
                 <img src={Profile} alt="profile" className='profile' ></img>
                <p>Hello!!! Thanks for visiting my portfolio.</p>
                <p>I have completed my master’s in Management Information System with the Scholar of High Distinction
                    in May 2018 from The University Of Texas at Dallas. I have pursued my bachelor’s in Computer Engineering.</p>
                <p>My areas of interest are as follows: </p>
                    <ul style={{display:"inline-block", textAlign:"left"}}>
                        <li>Software Development</li>
                        <li>ChatBot, Alexa skills</li>
                        <li>Data Science and Analytics</li>
                    </ul>
                
            </div>
        );
    }
}

export default About;