const initialState = {
  appName: "chat app",
  appVersion: '10'
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGEAPPNAME":
      return { ...state, appName: action.appName };
    case 'CHANGEAPPVERSION':
      return{...state,appVersion:action.appVersion}
    default:
      return state;
  }
};

export default AppReducer;
