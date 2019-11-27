import React, { Component } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext();



class MainProvider extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      
    }
  }

  getItems = () => {
    axios.get('/classifiedItems').then((res)=>{
          
          this.setState({
            items: res.data
          })
      console.log(this.state.items)
    });
  }
  
  
  
  
  render() {
    
    return (
      <Provider value={{
        ...this.state,
        getItems: this.getItems,
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