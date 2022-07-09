import React, {useContext} from "react";
import {AlertContext} from '../context/alert/AlertContext'

const Alert = () => {
  const {alert,hide} = useContext(AlertContext);
 
 if (!alert.visible) {  
  return null
 }
 
 
  return (
    <div
      className={`alert alert-${alert.type || "warning"} alert-dismissible`}
      role="alert"
      onClick={hide}
    >
      <strong></strong>
      {alert.text}
      <button type="button" className="close" aria-label="Close"></button>
    </div>
  );
};

export default Alert;
