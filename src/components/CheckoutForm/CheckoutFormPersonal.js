import React, { Component } from "react";
import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "./TextValidator";

class CheckoutFormPersonal extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <div className="post-form mb-3">
        <ValidatorForm onSubmit={this.handleSubmit}>
          <h3>Personal info</h3>

          <div className="form-group">
            <TextValidator
              className="form-control"
              type="text"
              placeholder="Enter title"
              name="title"
              value={this.props.title}
              onChange={this.props.onChangeTitle}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>
          <div className="form-group">
            <TextValidator
              type="text"
              className="form-control"
              name="field_area"
              placeholder="Enter your field_area"
              value={this.props.field_area}
              onChange={this.props.onChangeField_Area}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>
          <div className="form-group">
            <TextValidator
              type="text"
              className="form-control"
              name="field_owner_country"
              placeholder="Enter your field owner country"
              value={this.props.field_owner_country}
              onChange={this.props.onChangeField_Owner_Country}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>
          <div className="form-group">
            <TextValidator
              type="text"
              className="form-control"
              name="field_owner_email"
              placeholder="Enter your field owner email"
              value={this.props.field_owner_email}
              onChange={this.props.onChangeField_Owner_Email}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="field_owner_organization"
              placeholder="Enter your field owner organization"
              value={this.props.field_owner_organization}
              onChange={this.props.onChangeField_Owner_Organization}
              
            />
          </div>

          <button className="btn btn-dark">Next</button>
        </ValidatorForm>
      </div>
    );
  }
}

export default CheckoutFormPersonal;
