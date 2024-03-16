import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/editCategory.css'
import axios from '../Api/AxiosApi';
import { IoMdCloseCircle } from "react-icons/io";

const Editcategory = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryName = {
      category: e.target.categoryname.value,
    };
    
      try{
        const response = await axios.put(`/edit/todo/category/${id}`,categoryName)
        if(response.status===200){
            await  swal("Success!", response.data.message, "success");
            navigate("/")
        }
      }catch(error){
        swal("Error!", error.response.data.message, "error");
      }
  };

  return (
    <div className='catwrapper'>
    <div className='catcontainer'>
    <div className='header-container'>
    <IoMdCloseCircle className='editclosebtn' onClick={()=>navigate('/')}/>
    </div>
    <h2>Edit Category Name</h2>
    <form onSubmit={handleSubmit}>
    <div className='form-group'>
    <label htmlFor="categoryname">Category Name</label>
    <input
    type="text"
    id="categoryname"
    name="categoryname"
    defaultValue={category}
    />
    </div>
    <button type="submit" className='catbtn'>
    Save
    </button>
    </form>
    </div>
    </div>
  );
};

export default Editcategory;