const initialState = {
  userName: "mehtab alam"
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGEUSERNAME":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
