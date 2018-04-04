import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './css/index.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Hello World!!!"
        }
    }

    onChange = () => {
        this.setState({
            message: Math.ceil((Math.random() * 10))
        })
    };

    render() {
        return (
            <div className='container'>
                <div className="spinner"/>
                <div className="loading2" >
                    <div className="line1"/>
                    <div className="line2"/>
                    <div className="line3"/>
                    <div className="line4"/>
                    <div className="line5"/>
                </div>
                <div className="fanye" />
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
