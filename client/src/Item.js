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
        let {price, name, url} = this.props
        return (
            <div className="productinfo">
                <img className="imgs" alt="item" src={url}></img>
                <h2>{name}</h2>
                <h3>
                    ${price}
                </h3>
            </div>
        )
    }
}


export default withProvider(Item);