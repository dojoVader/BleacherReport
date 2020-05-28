import React from 'react';
import './App.css';
import Piano from './component/Piano/Piano';

export default class App extends React.Component {


    render() {
        return (
            <div className="main-app container col-md-12 col-lg-12">
                <Piano />

             
            </div>
        );
    }
}