import { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "client" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("Signup successful! Please login.");
    } catch (error) {
      alert("Signup failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
      <select onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
        <option value="client">Client</option>
        <option value="lawyer">Lawyer</option>
      </select>
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
