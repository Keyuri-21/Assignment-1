import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { createparentUrl } from '../../redux/apiActions.js';



const AddParent = () => {
  const parents = {
    fname: '',
    lname: '',
    parentOf: '',
    relation: '',
    phoneNo: '',
  };
  const [parent, setParent] = useState(parents);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setParent({ ...parent, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
  
    const parentData = {
      fname: parent.fname,
      lname: parent.lname,
      parentOf: parent.parentOf,
      relation: parent.relation,
      phoneNo: parent.phoneNo,
    };
  
    try {
      const response = await axios.post(createparentUrl, parentData);
  
      toast.success(response.data.msg, { position: 'top-right' });
      navigate('/parentList');
    } catch (error) {
      console.error('Error creating parent:', error);
    }
  };
  

  //form for the adding data of parent
  return (
    <div className="container mt-5">
      <Link to="/parentList" className="btn btn-primary">
        Back
      </Link>
      <h3 className="mt-3">Add New Parent</h3>
      <form className="row g-3 mt-3" onSubmit={submitForm}>
        <div className="col-md-6">
          <label htmlFor="fname" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="Enter Your Name"
            onChange={inputHandler}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lname" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Enter Your Surname"
            onChange={inputHandler}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="parentOf" className="form-label">
            Parent Of:
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="parentOf"
            name="parentOf"
            autoComplete="off"
            placeholder="Enter Your Child Name"
            onChange={inputHandler}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="relation" className="form-label">
            Relation:
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="relation"
            name="relation"
            autoComplete="off"
            placeholder="Enter Your Relation with Child"
            onChange={inputHandler}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phoneNo" className="form-label">
            Contact Number:
          </label>
          <input
            type="text" 
            required
            className="form-control"
            id="phoneNo"
            name="phoneNo"
            autoComplete="off"
            placeholder="Enter Your Number"
            onChange={inputHandler}
          />
        </div>
        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-primary">
            Add Parent Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddParent;
