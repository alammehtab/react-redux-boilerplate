const changeAppName = (appName) => {
  return (dispatch) => {
    return dispatch({ type: "CHANGEAPPNAME", payload: appName });
  };
};

const changeUserName = (userName) => {
  return (dispatch) => {
    return dispatch({ type: "CHANGEUSERNAME", payload: userName });
  };
};

const changeAppVersion = (newVersion) => {
  return (dispatch) => {
    return dispatch({ type: "CHANGEAPPVERSION", payload: newVersion });
  };
};

const clearData = () => {
  return (dispatch) => {
    return dispatch({ type: "CLEARDATA" });
  };
};

export { changeAppName, changeUserName, changeAppVersion, clearData };

