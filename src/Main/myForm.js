import React, { Component } from 'react';

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
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>)
    }
}

export default MyForm;