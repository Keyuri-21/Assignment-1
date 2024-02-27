import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { API_BASE_URL, GETONEPARENT_ENDPOINT, UPDATEPARENT_ENDPOINT } from '../utils/Constants';

const EditParent = () => {
  const { id } = useParams();
  const [parent, setParent] = useState({
    fname: '',
    lname: '',
    parentOf: '',
    relation: '',
    phoneNo: '',
  });
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setParent({ ...parent, [name]: value });
  };

  useEffect(() => {
    axios.get(`${API_BASE_URL}${GETONEPARENT_ENDPOINT}/${id}`)
      .then((response) => {
        setParent(response.data);
        const fetchParentData = response.data.parentExist;
        setParent({
          fname: fetchParentData.fname,
          lname: fetchParentData.lname,
          parentOf: fetchParentData.parentOf,
          relation: fetchParentData.relation,
          phoneNo: fetchParentData.phoneNo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('fname', parent.fname);
    formData.append('lname', parent.lname);
    formData.append('parentOf', parent.parentOf);
    formData.append('relation', parent.relation);
    formData.append('phoneNo', parent.phoneNo);

    await axios.put(`http://localhost:7000/api/updateParent/${id}`, formData, {})
      .then((response) => {
        toast.success(response.data.msg, { position: 'top-right' });
        navigate('/parentList');
      })
      .catch((error) => console.log(error));
  };

  //for editing the parent details 
  return (
    <div className='container mt-5'>
      <Link to={'/parentList'} className='btn btn-primary'>
        Back
      </Link>
      <h3 className='mt-3'>Update Parent Details</h3>
      <form className='row g-3 mt-3' onSubmit={submitForm}>
        <div className='col-md-6'>
          <label htmlFor='fname' className='form-label'>
            First Name:
          </label>
          <input
            type='text'
            value={parent.fname}
            onChange={inputChangeHandler}
            id='fname'
            name='fname'
            autoComplete='off'
            className='form-control'
            placeholder='Enter First Name'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='lname' className='form-label'>
            Last Name:
          </label>
          <input
            type='text'
            value={parent.lname}
            onChange={inputChangeHandler}
            id='lname'
            name='lname'
            autoComplete='off'
            className='form-control'
            placeholder='Enter Last Name'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='parentOf' className='form-label'>
            Parent Of:
          </label>
          <input
            type='text'
            value={parent.parentOf}
            onChange={inputChangeHandler}
            id='parentOf'
            name='parentOf'
            autoComplete='off'
            className='form-control'
            placeholder='Enter Parent Of'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='relation' className='form-label'>
            Relation:
          </label>
          <input
            type='text'
            value={parent.relation}
            onChange={inputChangeHandler}
            id='relation'
            name='relation'
            autoComplete='off'
            className='form-control'
            placeholder='Enter Relation'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='phoneNo' className='form-label'>
            Contact Number:
          </label>
          <input
            type='text'
            value={parent.phoneNo}
            onChange={inputChangeHandler}
            id='phoneNo'
            name='phoneNo'
            autoComplete='off'
            className='form-control'
            placeholder='Enter Contact Number'
          />
        </div>
        <div className='col-12 mt-3'>
          <button type='submit' className='btn btn-primary'>
            Update Parent Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditParent;
