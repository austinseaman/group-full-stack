import React, { Component } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext();



class MainProvider extends Component {
  constructor() {
    super();
    this.state = {
      camping: [],
      cycling: [],
      fishing: [],
      skiing: [],
    }
  }

  getCamping = () => {
    axios.get('/classifiedItems').then((res) => {
      // filter
      const campingFilter = res.data.filter((category) => {
        return category.category === 'Camping' 
      })
      this.setState({camping: campingFilter})

      // setState

      console.log(this.state.camping)
    })
  }
  
  
  
  
  render() {
    
    return (
      <Provider value={{
        ...this.state,
        getItems: this.getItems,
        getCamping: this.getCamping,
      }}>
        {this.props.children}
      </Provider>
    )
  }



}

export default MainProvider

export function withProvider (Comp) {
  return props => <Consumer>
                    {value => <Comp {...value} {...props} />}
                  </Consumer>
}