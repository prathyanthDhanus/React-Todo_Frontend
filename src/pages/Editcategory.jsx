import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/editCategory.css'

const Editcategory = () => {
  const { category, id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryName = {
      category: e.target.categoryname.value,
    };
    console.log(categoryName);
  };

  return (
    <div className='catwrapper'>
    <div className='catcontainer'>
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