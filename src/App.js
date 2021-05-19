import "./styles.css";
import { Header } from "./Components/Header/Header";
import { Patisserie } from "./Components/Patisserie/Patisserie";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Patisserie />
    </div>
  );
}
