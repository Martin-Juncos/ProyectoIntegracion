import { GET_USERS, GET_USER_BY_ID, GET_USER_BY_NAME } from "./actions";

const initialState = {
  users: [],
  usersCopy: [],
  user: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        usersCopy: action.payload,
        users: action.payload,
      };
      case GET_USER_BY_ID:
        return {
        ...state,
        user: action.payload
        }

      case GET_USER_BY_NAME:
        return {
          ...state,
          users: action.payload
        }
    default:
      return { ...state };
  }
}
