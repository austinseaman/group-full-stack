import React, { Component } from 'react'
import axios from 'axios'

class AddItemForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            url: '',
            price: '',
            description: '',
            contactName: '',
            phoneNum: '',
            email: '',
            category: ''
        }
    }


    handleCategoryChange = (e) => {
        e.preventDefault()
        this.setState({category: e.target.value})
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/classifiedItems').then((res) => {
            this.setState({
                
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Sell your items</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange} type="text" name="name" value={this.state.name} placeholder="Item Name" required/>
                        <input onChange={this.handleChange} type="text" name="url" value={this.state.url} placeholder="Image URL" required/>
                        <input onChange={this.handleChange} type="text" name="price" value={this.state.price} placeholder="Price" required/>
                        <input onChange={this.handleChange} type="text" name="contactName" value={this.state.contactName} placeholder="Your Name" required/>
                        <input onChange={this.handleChange} type="tel" pattern='[0-9]{3} [0-9]{3} [0-9]{4}' name="phoneNum" value={this.state.phoneNum} placeholder="Phone Number" required/>
                        <input onChange={this.handleChange} type="email" name="email" value={this.state.email} placeholder="Email" required/>
                        <select name="category" onChange={this.handleCategoryChange}>
                            <option value="default">Item Category</option>
                            <option value="Camping">Camping</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Fishing">Fishing</option>
                            <option value="Skiing">Skiing</option>
                        </select>
                    </div>
                    <br/>
                    <div>
                    <textarea name="itemDesc" id="" cols="149" rows="15" placeholder="Item Description"></textarea>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddItemForm 