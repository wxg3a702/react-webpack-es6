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
                <h1 className='h1'>{this.state.message}</h1>
                <button className='button' onClick={this.onChange}>cilck me</button>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
