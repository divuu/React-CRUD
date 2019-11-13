import React, { Component } from 'react';
//import axios from 'axios';
import Axios from 'axios';

class Create extends Component {

    constructor(props) {
        console.log('Constrctor Deploy');
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            business_name: '',
            business_gst_number: ''
        }
    }

    onChangePersonName = (e) => {
        console.log('on change person  Deploy');
        let E = e.target.value;
        console.log("E", e.target.value);
        this.setState((prevState) => {
            return {
                person_name: E
            }
        });
    }

    onChangeBusinessName = (e) => {
        console.log('On change business name Deploy');
        let E = e.target.value;
        this.setState((prevState) => {
            return {
                business_name: E
            }
        });
    }

    onChangeGstNumber = (e) => {
        console.log('on change gst number Deploy');
        let E = e.target.value;
        this.setState((prevState) => {
            return {
                business_gst_number: E
            }
        });
    }

    onSubmit = (e) => {
        console.log('Submit button Deploy');
        e.preventDefault();
        console.log(`the values are ${this.state.person_name}, 
            ${this.state.business_name}, 
            ${this.state.business_gst_number}`);

        const obj = {
            person_name: this.state.person_name,
            business_name: this.state.business_name,
            business_gst_number: this.state.business_gst_number
        };    
        Axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log (res.data));

        this.setState ((prevState) => {
            console.log('Refreshing the Data');
            return {
               person_name : ' ',
               business_gst_number : ' ',
               business_name :' '
            }   
        });
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.person_name}
                            onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.business_name}
                            onChange={this.onChangeBusinessName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.business_gst_number}
                            onChange={this.onChangeGstNumber}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Create;