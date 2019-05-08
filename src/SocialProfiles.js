import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class Profile extends Component {
    render() {
        const { image, link } = this.props.profile;
        return (
            <div style={{ display: 'inline-block', width: 20, margin: 5 }}>
                <a href={link}><img style={{ width: 20 }} src={image} alt="social-profile" /></a>
            </div>
        );
    }
}

class SocialProfiles extends Component {
    render() {

        return (
            <div>
                <h2>Connect with me!</h2>
                {
                    SOCIAL_PROFILES.map(sc => {
                        return (
                            <Profile key={sc.id} profile={sc} />
                        )
                    })
                }
            </div>
        );
    }
}

export default SocialProfiles;