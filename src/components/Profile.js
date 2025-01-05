import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    avatar: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { name, bio, avatar } = profile;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/profile/me", {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        });
        setProfile(res.data);
      } catch (err) {
        setError(err.response.data.msg);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const onChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("/api/profile/me", profile, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      setProfile(res.data);
    } catch (err) {
      setError(err.response.data.msg);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Bio</label>
          <textarea name="bio" value={bio} onChange={onChange}></textarea>
        </div>
        <div>
          <label>Avatar URL</label>
          <input type="text" name="avatar" value={avatar} onChange={onChange} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
