import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import QnA from './QnA';


export default class App extends Component {
    render() {
        return (
            <Layout>
                <Route exact path='/portfolio'  component={Home} />
                <Route exact path='/'  component={Home} />
                <Route path='/About' component={About} />
                <Route path='/QnA' component={QnA} />
            </Layout>
        );
    }
}