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

const changeAppVersion=(newVersion)=>{
  return(dispatch)=>{
    return dispatch({type:'CHANGEAPPVERSION',appVersion:newVersion})
  }
}

export { changeAppName, changeUserName,changeAppVersion };

