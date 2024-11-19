import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";


const Contact = ({ id, email, phone, linkedin }) => {
  const [contact, setContact] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "contact");
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);
  return (
    <div id={id} className="languagecontainer">
      <text className="contacttitle">
        <b>{contact.title}</b>
      </text>
      <div className="languagecontainer2">
        <div className="card">
          <img
            src={`data:image/png;base64,${contact.image1}`}
            className="contactimage"
          />
          <text className="contacttext">{email}</text>
        </div>
        <div className="card">
          <img
            src={`data:image/png;base64,${contact.image2}`}
            className="contactimage"
          />
          <text className="contacttext">{phone}</text>
        </div>
        <div className="card">
          <img
            src={`data:image/png;base64,${contact.image3}`}
            className="contactimage"
          />
          <text className="contacttext">{linkedin}</text>
        </div>
      </div>
    </div>
  );
};

export default Contact;
