import "./styles.css";
import { useState } from "react";
import { Header } from "./Components/Header/Header";
import macaron from "./macaron.svg";
import cinnamon from "./cinnamon.svg";
import tartelette from "./tartelle.svg";
import cake from "./cake.svg";
import croissant from "./croissant.svg";
import cherry from "./cherry-cake.svg";
import sweet from "./sweet.svg";
import coffee from "./coffee-cup.svg";

const menu = [
  { name: "Macaron", price: 2.0, img: macaron },
  { name: "Tartelette", price: 3.5, img: tartelette },
  { name: " Cinnamon roll", price: 1.5, img: cinnamon },
  { name: "Caramel Tart", price: 2.0, img: cake },
  { name: "Croissant", price: 2.7, img: croissant },
  { name: "Cherry Pie", price: 2.5, img: cherry },
  { name: "Choco Cake", price: 3.7, img: sweet },
  { name: "Coffee", price: 1.7, img: coffee }
];

export default function App() {
  const [total, setTotal] = useState(0);

  const handleAdd = (e) => {
    setTotal(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    setTotal(0);
    console.log("clicked");
  };
  return (
    <div className="App">
      <Header />

      <ul>
        {menu.map((item, index) => (
          <li key={index} className="menu">
            <p>
              <img src={item.img} alt="cake" />
              {item.name}
            </p>
            <p>R$ {item.price}</p>
            <button value={item.price} onClick={handleAdd}>
              Add
            </button>
          </li>
        ))}
      </ul>

      <section className="total">
        <p>Total: </p>
        <span>R$ {total}</span>
        <br />
        <button onClick={handleClick}>Pay Bill</button>
      </section>
    </div>
  );
}
