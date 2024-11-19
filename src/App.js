import "./App.css";
//import gambar
import Bran from "../src/assets/image/brandon.png";
import Nature from "../src/assets/image/nature.png";
import Book from "../src/assets/image/book.png";
import Translate from "../src/assets/image/translate.png";
import Computer from "../src/assets/image/computer.png";
//import page
import ProfileInfo from "./page/ProfileInfo";
import Contact from "./page/Contact";
import ProfilePicture from "./page/ProfilePicture";
import Education from "./page/Education";
import Language from "./page/Language";
import Skill from "./page/Skill";
import Navigation from "./component/Navbar";

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <ProfilePicture
          imageSrc={Bran}
          altText="Hi my name is Brandon Luturmas!"
        />
        <ProfileInfo
          id="profileinfo"
          prof="Profile"
          description="I am a Computer Science student passionate about programming, AI, and data analysis. Skilled in Python, Java, and C++, with experience in algorithms and web development. A team player with strong analytical skills, eager to learn and contribute to innovative tech solutions."
          imageSrc={Computer}
        />
        <Education
          id="education"
          scolar="University Of Klabat"
          imageSrc={Book}
        />
        <Language id="language" imageSrc={Translate} />
        <Skill id="skill" />

        <Contact
          id="contact"
          email="brandonprince49@gmail.com"
          phone="081316445453"
          linkedin="linkedin.com/in/brandon-luturmas"
        />
      </div>
    </div>
  );
};

export default App;
