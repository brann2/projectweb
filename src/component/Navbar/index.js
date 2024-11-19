import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";
const Navigation = () => {
  const [navigation, setNavigation] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const navigationRef = ref(db, "navigation");
    onValue(navigationRef, (snapshot) => {
      const data = snapshot.val();
      setNavigation(data);
    });
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-content">
        <img src={`data:image/png;base64,${navigation.image1}`} className="nav-picture" />
        <h2 className="nav-text">{navigation.title}</h2>
      </div>
      <div className="link-container">
        <a className="nava" href="#profileinfo">
          {navigation.nav1}
        </a>
        <a className="nava" href="#education">
          {navigation.nav2}
        </a>
        <a className="nava" href="#language">
          {navigation.nav3}
        </a>
        <a className="nava" href="#skill">
          {navigation.nav4}
        </a>
        <a className="nava" href="#contact">
          {navigation.nav5}
        </a>
      </div>
    </div>
  );
};

export default Navigation;
