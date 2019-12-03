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
            <div className='items-container'>
                {mappedSkiing}
            </div>
        );
    }
}

export default withProvider(Skiing);