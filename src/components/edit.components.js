import React, {Component} from 'react';

class Edit extends Component{

    /* constructor(){
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    } */


    render() {
        return (
            <div style={{ marginTop: 10 }}>
            <h3>Update Business</h3>
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
                    <input type="submit" value="Update Business" className="btn btn-primary" />
                </div>
            </form>
        </div>
        );
    }
}

export default Edit;