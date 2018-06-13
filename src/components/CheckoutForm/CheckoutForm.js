import React, { Component } from "react";
import axios from "axios";
import { History } from "react-router";
import { push, withRouter } from "react-router-dom";


import CheckoutFormPersonal from "./CheckoutFormPersonal";
import CheckoutFormShipping from "./CheckoutFormShipping";
import CheckoutFormBilling from "./CheckoutFormBilling";

class CheckoutForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,

      type: "",
      title: "",
      field_area: "",
      field_owner_country: "",
      field_owner_email: "",
      field_owner_organization: "",

      field_owner_type: "",
      field_project_type: "",
      field_rating_system: "",
      field_space_type: "",
      field_unit_type: "",

      field_country: "",
      field_address: "",
      field_state: "",
      field_city: "",
      field_zip_code: ""
    };
    this.goToNext = this.goToNext.bind(this);
    /*axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // Do something with response error
    if(error.response.status === 403) { 
      return <Redirect to='/' />
    }

    // Trow errr again (may be need for some other catch)
    return Promise.reject(error);
});*/
  }

  goToNext() {
    const { step } = this.state;

    if (step !== 3) {
      this.setState({ step: step + 1 });
    } else {
      this.props.history.push("/");

      const values = {
        type: this.state.type,
        title: this.state.title,
        field_area: this.state.field_area,
        field_owner_country: this.state.field_owner_country,
        field_owner_email: this.state.field_owner_email,
        field_owner_organization: this.field_owner_organizaton,
        shipping: {
          field_owner_type: this.state.field_owner_type,
          field_project_type: this.field_project_type,
          field_rating_system: this.field_rating_system,
          field_space_type: this.field_space_type,
          field_unit_type: this.field_unit_type
        },
        billing: {
          field_country: this.state.field_country,
          field_address: this.state.field_address,
          field_state: this.field_state,
          field_city: this.field_city,
          field_zip_code: this.field_zip_code
        }
      };
      console.log(values);
      let self = this.state;
      console.log(self);
      let node = {
        type: [{ target_id: "arc_project" }],
        title: [{ value: self.title }],
        field_area: [{ value: self.field_area }],
        field_owner_country: [{ value: self.field_owner_country }],
        field_owner_email: [{ value: self.field_owner_email }],
        field_owner_organization: [{ value: self.field_owner_organization }],
        field_owner_type: [{ value: self.field_owner_type }],
        field_project_type: [{ value: self.field_project_type }],
        field_rating_system: [{ value: self.field_rating_system }],
        field_space_type: [{ value: self.field_space_type }],
        field_unit_type: [{ value: "SI" }],
        field_country: [{ value: "US" }],
        field_address: [{ value: self.field_address }],
        field_state: [{ value: self.field_state }],
        field_city: [{ value: self.field_city }],
        field_zip_code: [{ value: self.field_zip_code }]
      };
      axios.defaults.headers.common["Authorization"] =
        "Basic eWFzdGhhbmE6aW5pdHBhc3M=";
      axios.defaults.headers.post["Content-Type"] = "application/json";
      let headers = {
        Authorization: {},
        "Content-Type": ""
      };

      axios
        .post(
          " http://dev-react-drupal8-app1.pantheonsite.io/node?_format=json",
          node,
          headers
        )
        .then(function(success) {
          console.log(success);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  handleChange(field) {
    return evt => this.setState({ [field]: evt.target.value });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <CheckoutFormPersonal
            key="personal"
            onSubmit={this.goToNext}
            type={this.state.type}
            title={this.state.title}
            field_area={this.state.field_area}
            field_owner_country={this.state.field_owner_country}
            field_owner_email={this.state.field_owner_email}
            field_owner_organization={this.field_owner_organizaton}
            onChangeType={this.handleChange("type")}
            onChangeTitle={this.handleChange("title")}
            onChangeField_Area={this.handleChange("field_area")}
            onChangeField_Owner_Country={this.handleChange(
              "field_owner_country"
            )}
            onChangeField_Owner_Email={this.handleChange("field_owner_email")}
            onChangeField_Owner_Organization={this.handleChange(
              "field_owner_organization"
            )}
          />
        );
      case 2:
        return (
          <CheckoutFormShipping
            key="shipping"
            onSubmit={this.goToNext}
            field_owner_type={this.state.field_owner_type}
            field_project_type={this.field_project_type}
            field_rating_system={this.field_rating_system}
            field_space_type={this.field_space_type}
            field_unit_type={this.field_unit_type}
            onChangeField_Owner_Type={this.handleChange("field_owner_type")}
            onChangeField_Project_Type={this.handleChange("field_project_type")}
            onChangeField_Rating_System={this.handleChange(
              "field_rating_system"
            )}
            onChangeField_Space_Type={this.handleChange("field_space_type")}
            onChangeField_Unit_Type={this.handleChange("field_unit_type")}
          />
        );
      case 3:
        return (
          <CheckoutFormBilling
            key="billing"
            onSubmit={this.goToNext}
            field_country={this.state.field_country}
            field_address={this.state.field_address}
            field_state={this.field_state}
            field_city={this.field_city}
            field_zip_code={this.field_zip_code}
            onChangeField_Country={this.handleChange("field_country")}
            onChangeField_Address={this.handleChange("field_address")}
            onChangeField_State={this.handleChange("field_state")}
            onChangeField_City={this.handleChange("field_city")}
            onChangeField_Zip_Code={this.handleChange("field_zip_code")}
          />
        );
    }
  }
}

export default withRouter(CheckoutForm);
