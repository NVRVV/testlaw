import { useState, useEffect } from "react";
import axios from "axios";

function Lawyers() {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/lawyers", {
          headers: { Authorization: token },
        });
        setLawyers(res.data);
      } catch (error) {
        alert("Failed to fetch lawyers");
      }
    };

    fetchLawyers();
  }, []);

  return (
    <div>
      <h2>Available Lawyers</h2>
      <ul>
        {lawyers.map((lawyer) => (
          <li key={lawyer.id}>
            {lawyer.name} - {lawyer.specialization} ({lawyer.location})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lawyers;
