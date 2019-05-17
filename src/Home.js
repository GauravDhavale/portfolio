import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

const titleArray = [
    "I'm a Software Engineer",
    "I'm a Chatbot and AI Enthusiastic",
    "I love coding"
];


class Home extends Component {

    state = { displayBio: false, titleIndex: 0, fadeIn: true }

    toggleBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ fadeIn: false })
        }, 2000);

        setInterval(() => {
            const titleIndex = this.state.titleIndex === titleArray.length - 1 ? 0 : this.state.titleIndex + 1;

            this.setState({ titleIndex, fadeIn: true });

            setTimeout(() => {
                this.setState({ fadeIn: false })
            }, 2000);

        }, 3000);
    }


    render() {
        console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL)
        const { titleIndex, fadeIn } = this.state;
        return (
            <div>
                <h1>Hello!!!</h1>
                <p>Welcome to my portfolio. My name is Gaurav. </p>
                <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}> {titleArray[titleIndex]}</p>
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