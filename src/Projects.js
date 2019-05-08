import React, { Component } from 'react';
import PROJECTS from './data/projects'

class Project extends Component {

    render() {
        const { title, description, link, image } = this.props.project;
        return (
            <div style={{ display: 'inline-block', width: 250, margin: 10 }}>
                <h5>{title}</h5>
                <img src={image} alt="profile" style={{ width: 200, height: 120 }} ></img>
                <p>{description}</p>
                <a href={link}>project source</a>
            </div>
        );
    }
}

class Projects extends Component {

    render() {
        return (
            <div>
                <h1>My Projects</h1>
                {
                    PROJECTS.map(proj => {
                        return (
                            <Project key={proj.id} project={proj} />
                        );
                    })
                }
            </div>
        )
    }
}

export default Projects;