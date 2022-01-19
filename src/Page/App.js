import React, {useReducer, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  loginUser,
  selectUser
} from '../store/features/user/userSlice'
import './App.css';

import {userSafetyInspector, userNKScientist} from './permissions'
import AccessControl from "../components/AccessControl";
import UserDetails from "../components/UserDetails";
import StatsPanel from "../components/StatsPanel";
import ShutdownPanel from "../components/ShutdownPanel";
import NoAccess from "../components/NoAccess";
import EmergencyAlertPanel from "../components/EmergencyAlertPanel";

function App() {
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
      <>
      <div>
         用户信息：{JSON.stringify(userInfo)}
      </div>
        <button onClick={()=> dispatch(loginUser(userNKScientist))}>登录信息</button>
          <br></br>



          <div className="example-app-container">
              <div>
                  {!userInfo ? (
                      <div>
                          <button onClick={() => dispatch(loginUser(userNKScientist))}>
                              Login as Plant Manager
                          </button>
                          <button onClick={() => dispatch(loginUser(userSafetyInspector))}>
                              Login as Safety Inspector
                          </button>
                      </div>
                  ) : (
                      <button onClick={() =>dispatch(loginUser())}>Logout</button>
                  )}
              </div>

              <UserDetails user={userInfo} />

              <AccessControl
                  extraAccessData={{ allowedNationality: "USA" }}
                  accessCheck={(extraAccessData, user) =>
                      user && user.nationality === extraAccessData.allowedNationality
                  }
                  renderNoAccess={() => (
                      <div className="countryWarning">
                          <div className="noAccessText">
                              Only Nuclear engineers from the USA 🇺🇸 can access this system.
                          </div>
                      </div>
                  )}
              >
                  <AccessControl
                      allowedPermissions={["read:stats"]}
                      renderNoAccess={() => <NoAccess permissionsNeeded="read:stats" />}
                  >
                      <StatsPanel />
                  </AccessControl>

                  <AccessControl
                      allowedPermissions={["control:emergencyalert"]}
                      renderNoAccess={() => (
                          <NoAccess permissionsNeeded="control:emergencyalert" />
                      )}
                  >
                      <EmergencyAlertPanel />
                  </AccessControl>

                  <AccessControl
                      allowedPermissions={["control:reactor"]}
                      renderNoAccess={() => (
                          <NoAccess permissionsNeeded="control:reactor" />
                      )}
                  >
                      <ShutdownPanel />
                  </AccessControl>
              </AccessControl>
              
              
              
              
          </div>
      </>

  );
}

export default App;
