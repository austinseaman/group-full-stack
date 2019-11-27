import React, { Component } from 'react';
import {withProvider} from './MainProvider'
import Item from './Item'

class Camping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campingItems: []
        }
    }
    componentDidMount() {
        this.props.getItems()
        
        let campingArr = this.props.items.filter(item => {
            console.log(item)
            return (item.category === 'Camping')
        })
        this.setState({
            campingItems: campingArr
        })
    }
    render() {
        let mappedCamping = this.state.campingItems.map((item)=>{
            return <Item name={item.name}/>
        })
        
        return (
            <div>
            {mappedCamping}

            </div>
        );
    }
}

export default withProvider(Camping);