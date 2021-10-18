import React, { useState, useContext } from "react";
import Alert from "../common/Alert";
import MenusApi from "../api/api";
import UserContext from "../auth/UserContext";
import './ProfileForm.css';

// Displays profile info to update/change. NavLinkButton

function ProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
  });

  const [formErrors, setFormErrors] = useState([]);
  const [saveConfirmed, setSaveConfirmed] = useState(false);

  console.debug(
      "ProfileForm",
      "currentUser=", currentUser,
      "formData=", formData,
      "formErrors=", formErrors,
      "saveConfirmed=", saveConfirmed,
  );

  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await MenusApi.saveProfile(username, profileData);
    } catch (errors) {
      debugger;
      setFormErrors(errors);
      return;
    }

    setFormData(f => ({ ...f}));
    setFormErrors([]);
    setSaveConfirmed(true);

    setCurrentUser(updatedUser);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
    setFormErrors([]);
  }

  return (
        <div className="container" id='ProfileForm'>
          <h3 className='ProfileTitle'>Profile</h3>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Username</label>
                <p className="form-control-plaintext">{formData.username}</p>
              </div>
              <div className="form-group">
                <label>First Name</label>
                <input
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                />
              </div>
              {formErrors.length
                  ? <Alert type="danger" messages={formErrors} />
                  : null}

              {saveConfirmed
                  ?
                  <Alert type="success" messages={["Updated successfully."]} />
                  : null}
              <div className='BtnDiv'>
              <button
                  className="ProfileBtn"
                  onClick={handleSubmit}>
                Save Changes
              </button>
              </div>
            </form>
          </div>
        </div>
  );
}

export default ProfileForm;
