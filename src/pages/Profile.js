// client/src/components/Profile.js
import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const { name, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  // Profile.js (inside onSubmit)
  // Example snippet in Profile.js
  // Example in Profile.js
  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token); // This should log your JWT token

    const data = new FormData();
    data.append("name", name);
    data.append("password", password);
    if (profilePicture) {
      data.append("profilePicture", profilePicture);
    }

    try {
      const res = await axios.put(
        "http://localhost:5001/api/auth/profile",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      console.log("Profile updated:", res.data);
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Enter new name"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter new password"
          />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input type="file" onChange={onFileChange} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
