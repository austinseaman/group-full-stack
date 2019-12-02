import React, { Component } from 'react';
import {withProvider} from './MainProvider'
import Item from './Item'

class Cycling extends Component {
    componentDidMount() {
        this.props.getCycling()
    }

    render() {
        const mappedCycling = this.props.cycling.map((cycle, i) => <Item key={i + cycle.price} price={cycle.price} name={cycle.name} url={cycle.url}/>)
        return (
            <div>
                {mappedCycling}
            </div>
        );
    }
}

export default withProvider(Cycling);