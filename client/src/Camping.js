import React, { Component } from 'react';
import { withProvider } from './MainProvider'
import Item from './Item'

class Camping extends Component {
    componentDidMount() {
        this.props.getCamping()
    }

    render() {
        const mappedCamping = this.props.camping.map((camp, i) => <Item key={i + camp.price} price={camp.price} name={camp.name} url={camp.url} _id={camp._id} />)
        return (
<<<<<<< HEAD
            <div className='items-container'>
=======
            <div className="items-container">
>>>>>>> 310f2fbf6c1ae9220cc6a95f4a7caa4ac8d0caeb
                {mappedCamping}
            </div>
        );
    }
}

export default withProvider(Camping);