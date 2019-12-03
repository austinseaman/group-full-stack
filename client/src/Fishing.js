import React, { Component } from 'react';
import {withProvider} from './MainProvider'
import Item from './Item'

class Fishing extends Component {
    componentDidMount() {
        this.props.getFishing()
    }
    render() {
        const mappedFishing = this.props.fishing.map((fish, i) => <Item key={i + fish.price} price={fish.price} name={fish.name} url={fish.url} _id={fish._id} />)
        return (
<<<<<<< HEAD
            <div className='items-container'>
=======
            <div className="items-container">
>>>>>>> 310f2fbf6c1ae9220cc6a95f4a7caa4ac8d0caeb
                {mappedFishing}
            </div>
        );
    }
}

export default withProvider(Fishing);