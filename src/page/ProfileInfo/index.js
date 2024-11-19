import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";
const ProfileInfo = ({ id, prof, description }) => {
  const [profileinfo, setProfileinfo] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const profileinfoRef = ref(db, "profileinfo");
    onValue(profileinfoRef, (snapshot) => {
      const data = snapshot.val();
      setProfileinfo(data);
    });
  }, []);
  return (
    <div id={id} className="profilecontainer">
      <div className="subprofilecontainer">
        <h2 className="subprofile">
          <b>{prof}</b>
        </h2>
        <p className="contentprofile">{description}</p>
      </div>
      <img
        src={`data:image/png;base64,${profileinfo.image1}`}
        className="imagecontentprofile"
      />
    </div>
  );
};

export default ProfileInfo;
