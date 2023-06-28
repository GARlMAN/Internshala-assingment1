import { useEffect, useState } from 'react';
import './App.css';
import Cards from './component/Cards.jsx';
import axios from "axios";

function App() {
  const [tests, setTests] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //use effects
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get("http://localhost:8000/api/tasks");
      setTests(data.tasks);
    };

    getUsers();
  }, [tests]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = false;
    await axios.post("http://localhost:8000/api/tasks", { title, description, status});
    // Refresh the tasks after submission
    const { data } = await axios.get("http://localhost:8000/api/tasks");
    setTests(data.tasks);
    // Clear the input fields

    setTitle("");
    setDescription("");
  };

  //colours for the cards
  const backgroundColors = ['#FDF3B4', '#D1EAED', '#FFDADB', '#FFD4AA', '#EBEBEB'];

  return (
    <div className="App">
      <div className='Taskform'>
        <h2>Add Company</h2>
        <form onSubmit={handleSubmit}>
          <label for="fname">Title</label><br />
          <input type="text" id="title" className="TitleInput" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
          <label for="fname">Description</label><br />
          <textarea type="text" id="description" className="DescriptionInput" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
          <input type="submit" className='Submit'/>
        </form>
      </div>
      <div className='CardsBlock'>
        {tests.map((task, index) => (
          <Cards
            key={index}
            id={task._id}
            title={task.title}
            description={task.description}
            backgroundColor={backgroundColors[index % 4]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
