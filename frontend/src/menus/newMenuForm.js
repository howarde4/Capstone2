import React, { useState, useContext } from "react";
import UserContext from "../auth/UserContext";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";
import './Menu.css';

// Form to add new menu. MenuList -> NewMenuForm

function NewMenuForm({addMenu}) {
  const { currentUser } = useContext(UserContext);
  const username = currentUser.username
  const history = useHistory();
  const [formData, setFormData] = useState({
    menu_event: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "NewMenuForm",
      "formData=", formData,
      "formErrors=", formErrors,
  );

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await addMenu(formData);
    if (result.success) {
      history.push(`/menus/${username}`);
    } else {
      setFormErrors(result.errors);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, username, [name]: value }));
  }

  return (
      <div id='menuForm' className="container">
        <h2 className='formTitle'>Add a Menu:</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group col-8">
          <label>Menu Event</label>
          <input
              name="menu_event"
              className="form-control"
              value={formData.menu_event}
              onChange={handleChange}
          />
        </div>
          {formErrors.length
              ? <Alert type="danger" messages={formErrors} />
              : null
          }
          <button
              type="submit"
              className="menuBtn"
              onSubmit={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
  );
}

export default NewMenuForm;