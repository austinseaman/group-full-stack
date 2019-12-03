import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './detailStyles.css'
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
    })
  }
  render() {
    let {name, url, price, description} = this.state.storage
    return (
     <div className='wrContainter'>
       <div className='buttonDiv'>
        <Link className='backButton' to={`/${this.state.storage.category}`}>Back to {this.state.storage.category}</Link>
       </div>
       <div className='mainContainer'>
         <div>
          <img className='detailImg' src={url} alt='the pic'></img>
         </div>
         <div>
          <h2>{name}</h2>
          <h4>${price}</h4>
          <p>Description: {description}</p>
         </div>
         <div>
          <h6>Contact Info</h6>
          <h6>Name: {this.state.storage.contactInfo.name}</h6>
          <h6>Phone Number: {this.state.storage.contactInfo.phoneNum}</h6>
          <h6>Email: {this.state.storage.contactInfo.email}</h6>
         </div>
       </div>
     </div>
    )
  }
}
export default Details;