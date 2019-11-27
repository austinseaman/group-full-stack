import React from 'react';
const {Provider, Consumer} = React.createContext();
import axios from 'axios';







class MainProvider extends React.Component {
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
    axios.get('http://localhost:8080/camping').then((res)=>{
      res.data.category === 'Camping' && this.setState({
        camping: res.data
      })
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

    )
  }



}

export default MainProvider

export function withProvider (Comp) {
  return props => <Consumer>
                    {value => <Comp {...value} {...props} />}
                  </Consumer>
}