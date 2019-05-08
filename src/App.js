import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import About from './About';


export default class App extends Component {
    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/About' component={About} />
            </Layout>
        );
    }
}