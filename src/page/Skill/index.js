import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";
const Skill = ({ id }) => {
       const [skill, setSkill] = useState({});
       useEffect(() => {
         const db = getDatabase();
         const skillRef = ref(db, "skill");
         onValue(skillRef, (snapshot) => {
           const data = snapshot.val();
           setSkill(data);
         });
       }, []);
  return (
    <div id={id} className="skillcontainer">
      <text className="skilltitle">
        <b>{skill.title}</b>
      </text>
      <div className="skillcontainer2">
        <div className="cards">
          <img
            src={`data:image/png;base64,${skill.image1}`}
            className="skillimage"
          />
          <text className="languagetext">{skill.subtitle}</text>
        </div>
        <div className="cards">
          <img
            src={`data:image/png;base64,${skill.image2}`}
            className="skillimage"
          />
          <text className="languagetext">{skill.subtitle2}</text>
        </div>
        <div className="cards">
          <img
            src={`data:image/png;base64,${skill.image3}`}
            className="skillimage"
          />
          <text className="languagetext">{skill.subtitle3}</text>
        </div>
        <div className="cards">
          <img
            src={`data:image/png;base64,${skill.image4}`}
            className="skillimage"
          />
          <text className="languagetext">{skill.subtitle4}</text>
        </div>
      </div>
    </div>
  );
};

export default Skill;
