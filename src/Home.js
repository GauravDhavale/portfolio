import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class Home extends Component {

    state = { displayBio: false }

    toggleBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <h1>Hello!!!</h1>
                <p>Welcome to my portfolio. My name is Gaurav and I'm a Software Engineer</p>
                {
                    this.state.displayBio ?
                        (
                            <div>
                                <p>I'm a Microsoft certified technology specialist with 5+ years of a full stack .NET developement experience. Please Check 
                                    About section for more Info.
                                </p>

                                <p>I'm creating this portfolio as a part of learning React</p>
                                <button onClick={this.toggleBio}>Show less</button>
                            </div>
                        )
                        : <button onClick={this.toggleBio}>Show more</button>
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        );
    }
}

export default Home;