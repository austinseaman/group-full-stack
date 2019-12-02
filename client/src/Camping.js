import React, { Component } from 'react';
import { withProvider } from './MainProvider'
import Item from './Item'

class Camping extends Component {
    componentDidMount() {
        this.props.getCamping()
    }

    render() {
        console.log(this.props)
        const mappedCamping = this.props.camping.map((camp, i) => <Item key={i + camp.price} price={camp.price} name={camp.name} url={camp.url} id={camp._id} />)
        return (
            <div>
                {mappedCamping}
            </div>
        );
    }
}

export default withProvider(Camping);