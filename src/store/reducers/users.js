import axios from "axios";

// action types
const GET_USERS = "GET_USERS";

// action creators
const _getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

// thunks
export const getUsers = () => {
  return async (dispatch) => {
    try {
      const { data: users } = await axios.get("/api/users");
      dispatch(_getUsers(users));
    } catch (error) {
      console.error("Uh-oh! Error fetching all users: ", error);
    }
  };
};

// reducer
const usersReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
