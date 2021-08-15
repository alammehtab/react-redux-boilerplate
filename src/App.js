import "./styles.css";
import { connect } from "react-redux";
import { changeAppName, changeUserName } from "./store/actions";

function App({ appName, userName, changeApp, changeUser }) {
  return (
    <div className="App">
      <h1>This app is named {appName}</h1>
      <p>This app is being used by {userName}!</p>
      <button onClick={(newName) => changeApp("messenger")}>Change App</button>
      <button onClick={(newName) => changeUser("aftab alam")}>
        Change User
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  appName: state.appReducer.appName,
  userName: state.userReducer.userName
});

const mapDispatchToProps = (dispatch) => ({
  changeApp: (newName) => dispatch(changeAppName(newName)),
  changeUser: (newName) => dispatch(changeUserName(newName))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
