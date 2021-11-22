const initialState = {
  appName: "chat app",
  appVersion: "10"
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGEAPPNAME":
      return { ...state, appName: action.payload };
    case "CHANGEAPPVERSION":
      return { ...state, appVersion: action.payload };
    case 'CLEARDATA':
      return initialState
    default:
      return state;
  }
};

export default AppReducer;
