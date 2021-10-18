import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";
import './LoginForm.css'

function SignupForm({ signup }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "SignupForm",
      "signup=", typeof signup,
      "formData=", formData,
      "formErrors=", formErrors,
  );

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      history.push("/menus");
    } else {
      setFormErrors(result.errors);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div id="LoginForm" className="container">
        <h1 className='title'>Sign Up Below</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group col-8">
            <label>Username</label>
            <input
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
            />
          </div>
          <div className="form-group col-8">
            <label>Password</label>
            <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
            />
          </div>
          <div className="form-group col-8">
            <label>First name</label>
            <input
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
            />
          </div>
          <div className="form-group col-8">
            <label>Last name</label>
            <input
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
            />
          </div>
          <div className="form-group col-8">
            <label>Email</label>
            <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
            />
          </div>
          {formErrors.length
              ? <Alert type="danger" messages={formErrors} />
              : null
          }
          <button
              type="submit"
              className="loginBtn"
              onSubmit={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
  );
}

export default SignupForm;