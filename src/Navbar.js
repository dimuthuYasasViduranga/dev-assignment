import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MegaPort Dev Assignment</h1>
      <div className="links">
        <Link to="/">Home (Activity 1)</Link>
        <Link to="/addBake">Add Bake (Activity 1)</Link>
        <Link to="/objectPath">Activity 2</Link>
        <Link to="/locations">Activity 3</Link>       
      </div>
    </nav>
  );
}
 
export default Navbar;