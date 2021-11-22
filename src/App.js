import "./styles.css";
import { connect } from "react-redux";
import {
  changeAppName,
  changeUserName,
  changeAppVersion
} from "./store/actions";

function App({
  appName,
  appVersion,
  userName,
  changeAppName,
  changeAppVersion,
  changeUserName
}) {
  return (
    <div className="App">
      <h1>{appName}</h1>
      <h1>{appVersion}</h1>
      <h1>{userName}</h1>
      <button onClick={(newName) => changeAppName("messenger")}>
        Change App
      </button>
      <button onClick={(newName) => changeUserName("aftab alam")}>
        Change User
      </button>
      <button onClick={(newVersion) => changeAppVersion('15')}>
        Change App Version
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  appName: state.AppReducer.appName,
  appVersion: state.AppReducer.appVersion,
  userName: state.UserReducer.userName
});

const mapDispatchToProps = (dispatch) => ({
  changeAppName: (newApp) => dispatch(changeAppName(newApp)),
  changeUserName: (newUser) => dispatch(changeUserName(newUser)),
  changeAppVersion: (newVersion) => dispatch(changeAppVersion(newVersion))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
