import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddBake = () => {
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [topping, setTopping] = useState('Regular Glazed');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bake = { id, type, name, topping };

    fetch('http://localhost:8000/bakes/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bake)
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="addBake">
      <h2>Add New Bake</h2>
      <form onSubmit={handleSubmit}>
        <label>Bake id:</label>
        <input 
          type="text" 
          required 
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label>Bake type:</label>
        <input 
          type="text" 
          required 
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label>Bake name:</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Bake topping:</label>
        <select
          value={topping}
          onChange={(e) => setTopping(e.target.value)}
        >
          <option value="Regular Glazed">Regular Glazed</option>
          <option value="Regular Powdered Sugar">Regular Powdered Sugar</option>
          <option value="Regular Chocolate with Sprinkles">Regular Chocolate with Sprinkles</option>
          <option value="Regular Chocolate">Regular Chocolate</option>
          <option value="Regular Maple">Regular Maple</option>
          <option value="Chocolate None">Chocolate None</option>
          <option value="Chocolate Glazed">Chocolate Glazed</option>
          <option value="Chocolate Sugar">Chocolate Sugar</option>
          <option value="Chocolate Powdered Sugar">Chocolate Powdered Sugar</option>
          <option value="Blueberry Maple">Blueberry Maple</option>
          <option value="Devil's Food None">Devil's Food None</option>
          <option value="Devil's Food Glazed">Devil's Food Glazed</option>
        </select>
        <button>Add Bake</button>
      </form>
    </div>
  );
}
 
export default AddBake;