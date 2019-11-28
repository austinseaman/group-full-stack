import React, { Component } from 'react';
import { withProvider } from './MainProvider';
// import axios from 'axios';


class Item extends Component {
    constructor() {
        super()
        this.state = {
            itemInfo: {},
        }
    }
    // componentDidMount() {
    //     axios.get(this.props).then(res => {
    //         this.setState({itemInfo: res.data})
    //     })
    // }

    render() {
        console.log(this.props)
        let {price} = this.props
        return (
            <div>
                <h3>
                    {price}
                </h3>
            </div>
        )
    }
}


export default withProvider(Item);