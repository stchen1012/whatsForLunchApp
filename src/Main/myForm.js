import React, { Component } from 'react';
import YelpResult from './yelpResult';

class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cuisineValue: '',
            addressValue: ''
        };
        // this.handleChange = this.handleChange.bind(this);
        this.cuisineChange = this.cuisineChange.bind(this);
        this.addressChange = this.addressChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // couldn't get this to work to handle multiple changes at once
    // handleChange(event) {
    //     let name = event.target.name;
    //     this.setState({
    //         [name]: event.target.value
    //     })
    // }

    cuisineChange(event) {
        this.setState({
            cuisineValue: event.target.value
        });
    }
    
    addressChange(event) {
        this.setState({
            addressValue: event.target.value
        });
    }

    handleSubmit(event) {
        alert("Submitted");
        event.preventDefault();
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    APIKey = "Bearer bdI2fQXX2e6OG22JRbJbRJrFwIe8BNdfK01E9Pb9fA7fgi8JDm2IVtdn_1MLzJLNFLpACOpVPJjAdCqsfRwG-klJCYrkzV08LUIsxxtBuRiTbG-uQqZGIsHFd6zVXHYx"

    componentDidMount() {
        // fetch(`https://api.yelp.com/v3/businesses/search?term=${this.cuisineValue}&location=${this.addressValue}&limit=1&sort_by=rating`, {
        //     method: 'GET',
        // })
        // .then((response) => {
        //     return response.json();
        // })
        // .then((response) =>{
        //     console.log(response);
        //     handleResponse(response);
        // })
        // .catch(function(error){
        //     console.log("Please Try Again");
        // })
    }

    myClick = () => {
        fetch(`https://api.yelp.com/v3/businesses/search?term=chinese&location=Astoria&limit=12&sort_by=rating`, {
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.APIKey}`
            },
        })
        .then((response) => {
            return response.json();
        })
        .then((response) =>{
            console.log(response);
            // handleResponse(response);
            this.setState({name: response.name})
        })
        .catch(function(error){
            console.log("Please Try Again");
        })
    }

    // handleResponse(response) {
    //     this.setState({name: response.name})
    // }

    render() {
        return(<div>
            <p>Form Component</p>
            <div className = "form-group">
                <form onSubmit = {this.handleSubmit}>
                    <label>Cuisine: </label>
                    <input name="Cuisine" type="text" value ={ this.cuisineValue }
                    onChange = {this.cuisineChange}
                    // onChange = {this.handleChange}
                    />
                    <label>Address: </label>
                    <input name="Address" type="text" value ={ this.addressValue }
                    onChange = {this.addressChange}
                    // onChange = {this.handleChange }
                    />
                    {/* <input type="submit" value="Submit" /> */}
                    <button onClick={this.myClick}>Generate</button>
                </form>
            </div>
            <div>
                <YelpResult />
            </div>
        </div>)
    }
}

export default MyForm;