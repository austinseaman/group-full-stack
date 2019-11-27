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
      skiing: []
    }
  }

  getCamping = () => {
    axios.get('/camping').then((res)=>{
      console.log(res.data)
      res.data.category === 'Camping' && this.setState({
        camping: res.data
      })
      console.log(this.state.camping)
    });
  }
  
  getCycling = () => {
    axios.get('http://localhost:8080/cycling').then((res)=>{
      res.data.category === 'Cycling' && this.setState({
        cycling: res.data
      })
    });
  }
  
  getFishing = () => {
    axios.get('http://localhost:8080/fishing').then((res)=>{
      res.data.category === 'Fishing' && this.setState({
        fishing: res.data
      })
    });
  }
  
  getSkiing = () => {
    axios.get('http://localhost:8080/skiing').then((res)=>{
      res.data.category === 'Skiing' && this.setState({
        skiing: res.data
      })
    });
  }
  
  
  
  render() {
    return (
      <Provider value={{
        ...this.state,
        getCamping: this.getCamping,
        getCycling: this.getCycling,
        getFishing: this.getFishing,
        getSkiing: this.getSkiing,
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