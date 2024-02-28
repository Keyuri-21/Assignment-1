import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { API_BASE_URL, DELETEPARENT_ENDPOINT, SEARCHPARENT_ENDPOINT, getallparentUrl } from '../Constants';

const Parent = () => {
  const [parents, setParents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (e) => {
    setSearchQuery(e.target.value);

    await axios
      .get(`http://localhost:7000/api/searchParent/${e.target.value}`)
      .then((response) => {
        setParents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(getallparentUrl);
      setParents(response.data);
    };

    fetchData();
  }, []);

  const deleteParent = async (parentId) => {
    await axios.delete(`${API_BASE_URL}${DELETEPARENT_ENDPOINT}/${parentId}`)
      .then((response) => {
        setParents((prevParent) =>
          prevParent.filter((parent) => parent._id !== parentId)
        );
        toast.success(response.data.msg, { position: 'top-right' });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //listing the parents
  return (
    <div className='container mt-5'>
      <Link to='/AddParent' className='btn btn-primary'>
        Add Parent
      </Link>

      <input
        style={{
          width: '300px',
          margin: '10px',
          border: '1px solid black',
          padding: '5px',
          backgroundColor: 'white',
          borderRadius: '5px',
        }}
        type='text'
        placeholder='Search by First Name...'
        value={searchQuery}
        onChange={handleSearch}
      />
      <table className='table mt-3'>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Parent Of</th>
            <th>Relation</th>
            <th>Contact No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parents.map((parent, index) => (
            <tr key={parent._id}>
              <td>{index + 1}</td>
              <td>{parent.fname} </td>
              <td>{parent.lname}</td>
              <td>{parent.parentOf}</td>
              <td>{parent.relation}</td>
              <td>{parent.phoneNo}</td>
              <td className='actionButtons' style={{ textAlign: 'center' }}>
                <button
                  onClick={() => deleteParent(parent._id)}
                  className='btn btn-danger btn-sm'
                >
                  Delete
                </button>
                <Link
                  to={`/updateParent/` + parent._id}
                  style={{ marginLeft: '10px' }}
                  className='btn btn-primary btn-sm'
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Parent;
