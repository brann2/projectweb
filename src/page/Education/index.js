import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";
const Education = ({ id }) => {
     const [education, setEducation] = useState({});
     useEffect(() => {
       const db = getDatabase();
       const educationRef = ref(db, "education");
       onValue(educationRef, (snapshot) => {
         const data = snapshot.val();
         setEducation(data);
       });
     }, []);
  return (
    <div id={id} className="educationcontainer">
      <img
        src={`data:image/png;base64,${education.image1}`}
        className="eduimage"
      />
      <text className="edutitle">
        <b>{education.title}</b>
      </text>
      <text className="edutext">{education.subtitle}</text>
    </div>
  );
};

export default Education;
