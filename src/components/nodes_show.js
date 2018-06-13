import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNode } from "../actions";
import { withRouter } from "react-router-dom";

class NodesShow extends Component {
  componentDidMount() {
    const { nid } = this.props.match.params;
    this.props.fetchNode(nid);
  }

  render() {
    const { node } = this.props;
    if (!node) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>

        <h3>{node.title}</h3>
        <p>{node.field_project_type}</p>
        <p>{node.field_country}</p>
        <p>{node.field_address}</p>
        <p>{node.field_state}</p>


      </div>
    );
  }
}

function mapStateToProps({ nodes }, ownProps) {
  return { node: nodes[ownProps.match.params.nid] };
}

export default withRouter(
  connect(
    mapStateToProps,
    { fetchNode }
  )(NodesShow)
);
