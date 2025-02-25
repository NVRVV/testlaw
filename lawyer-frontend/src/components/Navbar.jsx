import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Lawyer Finder</h2>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/lawyers">Find Lawyers</Link>
    </nav>
  );
}

export default Navbar;
