const INITIAL_STATE = {
  appName: "chat app"
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGEAPPNAME":
      return { ...state, appName: action.appName };
    default:
      return state;
  }
};

export default appReducer;
