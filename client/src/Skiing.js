import React, { Component } from 'react';
import {withProvider} from './MainProvider'
import Item from './Item'

class Skiing extends Component {
    componentDidMount() {
        this.props.getSkiing()
    }
    render() {
        const mappedSkiing = this.props.skiing.map((ski, i) => <Item key={i + ski.price} price={ski.price} name={ski.name} url={ski.url} _id={ski._id} />)
        return (
<<<<<<< HEAD
            <div className='items-container'>
=======
            <div className="items-container">
>>>>>>> 310f2fbf6c1ae9220cc6a95f4a7caa4ac8d0caeb
                {mappedSkiing}
            </div>
        );
    }
}

export default withProvider(Skiing);