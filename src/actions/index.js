import axios from "axios";

export const FETCH_NODES = "fetch_nodes";
export const FETCH_NODE = "fetch_node";
export const CREATE_NODE = "create_node";

export function fetchNodes() {
  const request = axios.get(
    " http://dev-react-drupal8-app1.pantheonsite.io/api/v1/arcprojects/?_format=json"
  );

  return {
    type: FETCH_NODES,
    payload: request
  };
}

export function createNode(values, callback) {
  axios.defaults.headers.common["Authorization"] =
    "Basic eWFzdGhhbmE6aW5pdHBhc3M=";
  axios.defaults.headers.post["Content-Type"] = "application/json";
  let headers = {
    Authorization: {},
    "Content-Type": ""
  };
  const request = axios
    .post(
      "http://dev-react-drupal8-app1.pantheonsite.io/node?_format=json",
      headers,
      values
    )
    .then(() => callback());

  return {
    type: CREATE_NODE,
    payload: request
  };
}

export function fetchNode(nid) {
  const request = axios.get(
    "http://dev-react-drupal8-app1.pantheonsite.io/api/v1/arcprojects/{node_id}?_format=json"
  );

  return {
    type: FETCH_NODE,
    payload: request
  };
}
