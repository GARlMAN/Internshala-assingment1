import React, { useState } from 'react'
import "./Cards.css";
import axios from 'axios';
const Cards = ({id, title, description, backgroundColor}) => {

  

  //new use states for editing
  const [titleNew, setTitleNew] = useState(title);
  const [descriptionNew, setDescriptionNew] = useState(description);


  //handle delete
  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:8000/api/task/${id}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEdit(false);
    const {data} = await axios.put(`http://localhost:8000/api/task/${id}`, { title: titleNew, description: descriptionNew});
    // Refresh the tasks after submission
    console.log(data)
    // setTests(data.tasks);
    // Clear the input fields

  };

  //this to check if you want to edit
  const [edit, setEdit] = useState(false)
  if(edit){ 
    return (
      <div className='Card' style={{ backgroundColor }}>
        <form onSubmit={handleSubmit}>
          <label for="fname">Title</label><br />
          <input type="text" id="title" className="TitleInput" value={titleNew} onChange={(e) => setTitleNew(e.target.value)} /><br />
          <label for="fname">Description</label><br />
          <textarea type="text" id="description" className="DescriptionInputEdit" value={descriptionNew} onChange={(e) => setDescriptionNew(e.target.value)} /><br />
          <input type="submit" className='Submit'/>
        </form>
      </div>

   )
  }

  return (
    <div className='Card' style={{ backgroundColor }}>
      <div className='Title'>{title}</div>
      <div className='Description'>{description }</div>
      <div>
        <button className='Edit' onClick={()=>{setEdit(true)}}>Edit</button>
        <button className='Delete' onClick={handleDelete}>Delete</button>
      </div>
      
    </div>

  )
}

export default Cards