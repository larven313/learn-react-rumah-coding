import logo from "./logo.svg";
import imgReact from "./images/react-icon.png";
import imgHTML from "./images/html.png";
import imgCSS from "./images/css.png";
import imgJavaScript from "./images/javascript.png";
import "./App.css";
import Card from "./components/Card.js";
import Car from "./components/Car.js";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>Halo Dunia</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={imgReact} alt="" />
      </header> */}
      <h3>Programming Course</h3>
      <div className="cards">
        <Card title="React JS Course" subtitle="Intermediate" img={imgReact} />
        <Card title="HTML Course" subtitle="Newbie" img={imgHTML} />
        <Card title="CSS Course" subtitle="Intermediate" img={imgCSS} />
        <Card
          title="Javascript Course"
          subtitle="Intermediate"
          img={imgJavaScript}
        />
      </div>
      {/* <Car
        brand="Ford"
        color="Red"
        total={25}
        worth={false}
        car={["mustang", "ferari", "BMW"]}
        beli={() => alert("Sudah dibeli")}
      /> */}
    </div>
  );
}

export default App;
