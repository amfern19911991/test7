import { FETCH_NODES, FETCH_NODE } from "../actions";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_NODE:
      return { ...state, [action.payload.data.nid]: action.payload.data };
    case FETCH_NODES:
      return _.mapKeys(action.payload.data, "nid");
    default:
      return state;
  }
}
