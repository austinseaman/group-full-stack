import React, { Component } from 'react';
import {withProvider} from './MainProvider'
import Item from './Item'

class Fishing extends Component {
    componentDidMount() {
        this.props.getFishing()
    }
    render() {
        const mappedFishing = this.props.fishing.map((fish, i) => <Item key={i + fish.price} price={fish.price} name={fish.name} url={fish.url}/>)
        return (
            <div>
                {mappedFishing}
            </div>
        );
    }
}

export default withProvider(Fishing);