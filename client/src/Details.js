import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';




class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      storage: {contactInfo: {name: ''}}
    }
  }

  componentDidMount() {
    let {_id} = this.props.match.params 
    axios.get(`/classifiedItems/${_id}`).then(res => {
      this.setState({
        storage: res.data
      })
      console.log(res.data)
    })

  }





  render() {
    let {name, url, price, description} = this.state.storage
    let lowerCat = this.state.storage.category
    
    return (
     <div>
      <Link to={`/${this.state.storage.category}`}>Back</Link>
      <h2>{name}</h2>
      <img src={url} alt='the pic'></img>
      <h4>{price}</h4>
      <p>{description}</p>
      <h6>{this.state.storage.contactInfo.name}</h6>
      <h6>{this.state.storage.contactInfo.phoneNum}</h6>
      <h6>{this.state.storage.contactInfo.email}</h6>
     </div>
    )
  }





}


export default Details;