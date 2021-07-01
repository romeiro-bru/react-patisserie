import React from "react";
import { useState } from "react";
import "./style.css";
import macaron from "../../../public/assets/svgs/macaron.svg";
import cinnamon from "../../../public/assets/svgs/cinnamon.svg";
import tartelette from "../../../public/assets/svgs/tartelle.svg";
import cake from "../../../public/assets/svgs/cake.svg";
import croissant from "../../../public/assets/svgs/croissant.svg";
import cherry from "../../../public/assets/svgs/cherry-cake.svg";
import sweet from "../../../public/assets/svgs/sweet.svg";
import coffee from "../../../public/assets/svgs/coffee-cup.svg";

const menu = [
  { name: "Macaron", price: 2.0, img: macaron },
  { name: "Tartelette", price: 3.5, img: tartelette },
  { name: " Cinnamon roll", price: 1.5, img: cinnamon },
  { name: "Caramel Tart", price: 2.0, img: cake },
  { name: "Croissant", price: 2.5, img: croissant },
  { name: "Cherry Pie", price: 3, img: cherry },
  { name: "Choco Cake", price: 3.5, img: sweet },
  { name: "Coffee", price: 1.5, img: coffee }
];

export function Patisserie() {
  const [total, setTotal] = useState(0);
  const [orderList, setOrderList] = useState([]);

  const handleAdd = (item) => {
    setTotal(total + item.price);
    setOrderList([...orderList, `${item.name}: R$ ${item.price}`]);
  };

  const handleDecrement = (item) => {
    const finalBill = total - item.price;
    return finalBill >= 0 ? setTotal(finalBill) : total;
  };

  const handleClick = () => {
    setTotal(0);
    setOrderList([]);
  };
  return (
    <>
      <ul>
        {menu.map((item, index) => (
          <li key={index} className="menu">
            <p>
              <img src={item.img} alt="cake" />
              {item.name}
            </p>
            <p>R$ {item.price}</p>
            <button onClick={() => handleDecrement(item)}>-</button>
            <button onClick={() => handleAdd(item)}>+</button>
          </li>
        ))}
      </ul>

      <section className="total">
        <p>Total: </p>
        <span>R$ {total}</span>
        <br />
        <button onClick={handleClick}>Pay Bill</button>
      </section>

      <section className="order">
        Items:
        <ul>
          {orderList.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
