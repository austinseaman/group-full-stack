import React, { Component } from 'react';
import {withProvider} from './MainProvider'

class Camping extends Component {
    componentDidMount() {
        this.props.getCamping()
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default withProvider{Camping};