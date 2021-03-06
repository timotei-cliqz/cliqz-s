import {
  ActionTypes,
  TypeKeys,
} from '../constants/actions';
import { Beacon } from '../models/beacon';

export const initialState: Beacon[] = [];

export default function mode(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.BEACONS_IN_RANGE:
      return action.payload;
    default:
      return state;
  }
}
