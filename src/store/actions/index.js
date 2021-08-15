const changeAppName = (appName) => {
  return (dispatch) => {
    return dispatch({ type: "CHANGEAPPNAME", appName: appName });
  };
};

const changeUserName = (userName) => {
  return (dispatch) => {
    return dispatch({ type: "CHANGEUSERNAME", userName: userName });
  };
};

export { changeAppName, changeUserName };
