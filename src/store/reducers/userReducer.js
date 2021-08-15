const INITIAL_STATE = {
  userName: "mehtab alam"
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGEUSERNAME":
      return { ...state, userName: action.userName };
    default:
      return state;
  }
};

export default userReducer;
