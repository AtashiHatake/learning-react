import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: ""
  });

  const [nameIP, setNameIP] = useState('');
  const [ageIP, setAgeIP] = useState('');

  const nameHandler = (e) => {
    setNameIP(e.target.value);
  };

  const ageHandler = (e) => {
    setAgeIP(e.target.value);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setProfile({ ...profile, name: nameIP });
    setNameIP('');
  };

  const handleAgeSubmit = (e) => {
    e.preventDefault();
    setProfile({ ...profile, age: ageIP });
    setAgeIP('');
  };

  return (
    <div style={{ 
      maxWidth: "400px", 
      margin: "30px auto", 
      padding: "20px", 
      border: "1px solid #ccc", 
      borderRadius: "8px", 
      backgroundColor: "#f5f5f5", 
      fontFamily: "Arial, sans-serif" 
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Profile:</h1>
      <form>
        <input 
          style={{ 
            border: "1px solid #ccc", 
            padding: "8px", 
            borderRadius: "4px", 
            width: "100%", 
            marginBottom: "10px" 
          }} 
          type="text" 
          value={nameIP} 
          onChange={nameHandler} 
          placeholder="Input your name"
        />

        <button 
          style={{ 
            border: "none", 
            backgroundColor: "#007bff", 
            color: "white", 
            padding: "8px 12px", 
            margin: "10px 0", 
            borderRadius: "4px", 
            cursor: "pointer" 
          }} 
          onClick={handleNameSubmit} 
          type="button"
        >
          Add Name
        </button>

        <br />

        <input 
          style={{ 
            border: "1px solid #ccc", 
            padding: "8px", 
            borderRadius: "4px", 
            width: "100%", 
            marginTop: "10px", 
            marginBottom: "10px" 
          }} 
          type="number" 
          value={ageIP} 
          onChange={ageHandler} 
          placeholder="Input your age"
        />

        <button 
          style={{ 
            border: "none", 
            backgroundColor: "#28a745", 
            color: "white", 
            padding: "8px 12px", 
            borderRadius: "4px", 
            cursor: "pointer" 
          }} 
          onClick={handleAgeSubmit} 
          type="button"
        >
          Add Age
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Age:</strong> {profile.age}</p>
      </div>
    </div>
  );
}

export default Profile;
