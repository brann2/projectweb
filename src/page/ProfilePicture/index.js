import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";
const ProfilePicture = ({ altText }) => {
      const [profiepicture, setProfilePicture] = useState({});
      useEffect(() => {
        const db = getDatabase();
        const profilepictureRef = ref(db, "profilepicture");
        onValue(profilepictureRef, (snapshot) => {
          const data = snapshot.val();
          setProfilePicture(data);
        });
      }, []);
  return (
    <div className="profilepicture">
      <div className="profile-picture-container">
        <h1 className="profile-picture-title">{profiepicture.title}</h1>
        <text className="profile-picture-text">{profiepicture.subtitle}</text>
        <a href="#profileinfo" className="profile-picture-button">
          {profiepicture.btn}
        </a>
      </div>
      <img
        src={`data:image/png;base64,${profiepicture.image1}`}
        className="profile-picture-image"
      />
    </div>
  );
};

export default ProfilePicture;
