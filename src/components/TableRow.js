import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    Axios.post("htttp://localhost:4000/business/delete/" + this.props.obj._id)
      .then(console.log("deleted"))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.person_name}</td>
        <td>{this.props.obj.business_name}</td>
        <td>{this.props.obj.business_gst_number}</td>
        <td>
          <Link
            onClick={"/Edit/:" + this.props.obj._id}
            className="btn btn-primary"
          >
            Edit
          </Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={this.delete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
