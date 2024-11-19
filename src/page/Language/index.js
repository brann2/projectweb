import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";
const Language = ({ id,}) => {
    const [language, setLanguage] = useState({});
    useEffect(() => {
      const db = getDatabase();
      const languageRef = ref(db, "language");
      onValue(languageRef, (snapshot) => {
        const data = snapshot.val();
        setLanguage(data);
      });
    }, []);
  return (
    <div id={id} className="languagecontainer">
      <text className="languagetitle">
        <b>{language.title}</b>
      </text>
      <div className="languagecontainer2">
        <div className="card">
          <img
            src={`data:image/png;base64,${language.image1}`}
            className="languageimage"
          />
          <text className="languagetext">{language.subtitle1}</text>
        </div>
        <div className="card">
          <img
            src={`data:image/png;base64,${language.image1}`}
            className="languageimage"
          />
          <text className="languagetext">{language.subtitle2}</text>
        </div>
      </div>
    </div>
  );
};

export default Language;
