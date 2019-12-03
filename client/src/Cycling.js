import React, { Component } from 'react';
import {withProvider} from './MainProvider'
import Item from './Item'

class Cycling extends Component {
    componentDidMount() {
        this.props.getCycling()
    }

    render() {
        const mappedCycling = this.props.cycling.map((cycle, i) => <Item key={i + cycle.price} price={cycle.price} name={cycle.name} url={cycle.url} _id={cycle._id} />)
        return (
<<<<<<< HEAD
            <div className='items-container'>
=======
            <div className="items-container">
>>>>>>> 310f2fbf6c1ae9220cc6a95f4a7caa4ac8d0caeb
                {mappedCycling}
            </div>
        );
    }
}

export default withProvider(Cycling);