import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNodes } from "../actions";
import { withRouter } from "react-router-dom";

class NodesIndex extends Component {
  componentDidMount() {
    this.props.fetchNodes();
  }

  renderNodes() {
    //const { node } = this.props;

    return _.map(this.props.nodes, node => {
      return (
        <li className="list-group-item" key={node.nid}>
          <Link to={`/nodes/${node.nid}`}>{node.title}</Link>
        </li>
      );
    });
  }

  render() {
    console.log(this.props.nodes);
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/nodes/new">
            Create an Arc project
          </Link>
        </div>
        <h3>Arc Projects</h3>
        <ul className="list-group">{this.renderNodes()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { nodes: state.nodes };
}

export default withRouter(
  connect(
    mapStateToProps,
    { fetchNodes }
  )(NodesIndex)
);
