import React, {useState, useContext} from "react";
import {AlertContext} from '../context/alert/AlertContext'

const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const submitHandler = event => {
    event.preventDefault()

if (value.trim()) {
  alert.show('note success', "success");
  setValue('')
}{
  alert.show("need text");
}
  }


  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Write note name"
          value={value}
          onChange={
            e => setValue(e.target.value)
          }
        />
      </div>
    </form>
  );

  
};


export default Form;
