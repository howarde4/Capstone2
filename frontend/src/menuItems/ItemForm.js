import React, { useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import Alert from "../common/Alert";
import MenusApi from "../api/api";
import './ItemForm.css';

// Form to add new menu item. MenuDetail -> ItemForm

function ItemForm() {
  const { username, id } = useParams();
  const menu_id = id;
  const history = useHistory();
  const [formData, setFormData] = useState({
    item_name: "",
    category:"",
    ing1:"",
    ing2:"",
    ing3:"",
    ing4:"",
    ing5:"",
    ing6:"",
    ing7:"",
    ing8:"",
    ing9:"",
    ing10:"",
    ing11:"",
    ing12:"",
    ing13:"",
    ing14:"",
    ing15:"",
    ing16:"",
    ing17:"",
    ing18:"",
    ing19:"",
    ing20:"",
    amt1:"",
    amt2:"",
    amt3:"",
    amt4:"",
    amt5:"",
    amt6:"",
    amt7:"",
    amt8:"",
    amt9:"",
    amt10:"",
    amt11:"",
    amt12:"",
    amt13:"",
    amt14:"",
    amt15:"",
    amt16:"",
    amt17:"",
    amt18:"",
    amt19:"",
    amt20:"", 
directions:"", 
img:"",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "ItemForm",
      "formData=", formData,
      "formErrors=", formErrors,
  );

  async function addItem(username, menu_id, itemData){
    try {
      await MenusApi.createItem(username, menu_id, itemData);
      return {success: true}
    } catch(errors) {
      console.error("failed", errors);
      return {success: false, errors};
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await addItem(username, menu_id, formData);
    if (result.success) {
      history.push(`/menus/${username}/${id}`);
    } else {
      setFormErrors(result.errors);
    }
  }

  function handleChange(evt) {
    const menu_id = id
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, menu_id, [name]: value }));
  }

  return (
    <>
      <Link to={`/menus/${username}/${id}`}><i className="fas fa-arrow-circle-left fa-2x" id="arrow"></i></Link>
      <br/>
      <Link to={`/menus/${username}/${id}/recipe`}>
        <button className="search">Search for recipes</button>
      </Link>
      <div id="ItemForm" className='container'>
        <h1 className='ItemTitle'>Add Item Below</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <label>Item Name</label>
              <input
                name="item_name"
                className="form-control"
                value={formData.item_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Category</label>
              <input
                name="category"
                className="form-control"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount &nbsp; 1</span>
            <input
              name="ing1"
              className="form-control"
              value={formData.ing1}
              onChange={handleChange}
            />
            <input
              name="amt1"
              className="form-control"
              value={formData.amt1}
              onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount &nbsp; 2</span>
            <input
              name="ing2"
              className="form-control"
              value={formData.ing2}
              onChange={handleChange}
            />
            <input
              name="amt2"
              className="form-control"
              value={formData.amt2}
              onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount &nbsp; 3</span>
            <input
              name="ing3"
              className="form-control"
              value={formData.ing3}
              onChange={handleChange}
            />
            <input
              name="amt3"
              className="form-control"
              value={formData.amt3}
              onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount &nbsp; 4</span>
            <input
              name="ing4"
              className="form-control"
              value={formData.ing4}
              onChange={handleChange}
            />
            <input
              name="amt4"
              className="form-control"
              value={formData.amt4}
              onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount &nbsp; 5</span>
            <input
              name="ing5"
              className="form-control"
              value={formData.ing5}
              onChange={handleChange}
            />
            <input
              name="amt5"
              className="form-control"
              value={formData.amt5}
              onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount &nbsp; 6</span>
            <input
              name="ing6"
              className="form-control"
              value={formData.ing6}
              onChange={handleChange}
            />
            <input
              name="amt6"
              className="form-control"
              value={formData.amt6}
              onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount &nbsp; 7</span>
            <input
              name="ing7"
              className="form-control"
              value={formData.ing7}
              onChange={handleChange}
            />
            <input
              name="amt7"
              className="form-control"
              value={formData.amt7}
              onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount &nbsp; 8</span>
            <input
                name="ing8"
                className="form-control"
                value={formData.ing8}
                onChange={handleChange}
            />
            <input
                name="amt8"
                className="form-control"
                value={formData.amt8}
                onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount &nbsp; 9</span>
            <input
                name="ing9"
                className="form-control"
                value={formData.ing9}
                onChange={handleChange}
            />
            <input
                name="amt9"
                className="form-control"
                value={formData.amt9}
                onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount 10</span>
            <input
                name="ing10"
                className="form-control"
                value={formData.ing10}
                onChange={handleChange}
            />
            <input
                name="amt10"
                className="form-control"
                value={formData.amt10}
                onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount 11</span>
            <input
                name="ing11"
                className="form-control"
                value={formData.ing11}
                onChange={handleChange}
            />
            <input
                name="amt11"
                className="form-control"
                value={formData.amt11}
                onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount 12</span>
            <input
                name="ing12"
                className="form-control"
                value={formData.ing12}
                onChange={handleChange}
            />
            <input
                name="amt12"
                className="form-control"
                value={formData.amt12}
                onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount 13</span>
            <input
                name="ing13"
                className="form-control"
                value={formData.ing13}
                onChange={handleChange}
            />
            <input
                name="amt13"
                className="form-control"
                value={formData.amt13}
                onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount 14</span>
            <input
                name="ing14"
                className="form-control"
                value={formData.ing14}
                onChange={handleChange}
            />
            <input
                name="amt14"
                className="form-control"
                value={formData.amt14}
                onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount 15</span>
            <input
                name="ing15"
                className="form-control"
                value={formData.ing15}
                onChange={handleChange}
            />
            <input
                name="amt15"
                className="form-control"
                value={formData.amt15}
                onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount 16</span>
            <input
                name="ing16"
                className="form-control"
                value={formData.ing16}
                onChange={handleChange}
            />
            <input
                name="amt16"
                className="form-control"
                value={formData.amt16}
                onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount 17</span>
            <input
                name="ing17"
                className="form-control"
                value={formData.ing17}
                onChange={handleChange}
            />
            <input
                name="amt17"
                className="form-control"
                value={formData.amt17}
                onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount 18</span>
            <input
                name="ing18"
                className="form-control"
                value={formData.ing18}
                onChange={handleChange}
            />
            <input
                name="amt18"
                className="form-control"
                value={formData.amt18}
                onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount 19</span>
            <input
                name="ing19"
                className="form-control"
                value={formData.ing19}
                onChange={handleChange}
            />
            <input
                name="amt19"
                className="form-control"
                value={formData.amt19}
                onChange={handleChange}
            />
          </div>
          <div className="input-group col-md-12">
            <span>Ingredient & Amount 20</span>
            <input
                name="ing20"
                className="form-control"
                value={formData.ing20}
                onChange={handleChange}
            />
            <input
                name="amt20"
                className="form-control"
                value={formData.amt20}
                onChange={handleChange}
            />
          </div>
          <div className="form-group col-10">
            <label>Directions</label>
            <textarea
                name="directions"
                id="directions"
                className="form-control"
                value={formData.directions}
                onChange={handleChange}
                rows="3"
            ></textarea>
          </div>
          <div className="form-group col-8">
            <label>Image</label>
            <input
                name="img"
                className="form-control"
                value={formData.img}
                onChange={handleChange}
            />
          </div>
          {formErrors.length
              ? <Alert type="danger" messages={formErrors} />
              : null
          }
          <button
              type="submit"
              className="submitBtn"
              onSubmit={handleSubmit}
          >
            Submit Item
          </button>
        </form>
      </div>
    </>
  );
}

export default ItemForm;