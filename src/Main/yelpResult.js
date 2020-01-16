import React, { Component } from 'react';
import { PassThrough } from 'stream';

class YelpResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            isClosed: false,
            url: '',
            rating: 0,
            price: ''
        };
    }

    render() {
        return(<div>
            <p>YelpResult Component</p>
            <div>
                { this.state.imageUrl }
            </div>
            <h1>
                { this.state.name }
            </h1>
            <h3>
                { this.state.rating }
                { this.state.isClosed }
                { this.state.url }
                { this.state.price }
            </h3>
        </div>)
    }
}

export default YelpResult;