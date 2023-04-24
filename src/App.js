import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import User from "./components/User";
import Address from "./features/inputs/address";
import Input from "./features/inputs/Input";

function App() {
  const { address, name, number } = useSelector((state) => state.inputs);

  return (
    <div className="App">
      <h1 style={{ color: "purple" }}>{address}</h1>
      <h1 style={{ color: "purple" }}>{name}</h1>
      <h1 style={{ color: "purple" }}>{number}</h1>
      <h1>Address</h1>
      <Address />
      <h1>Users</h1>
      <Input />
      <Navbar />
      <User />
      <Products />
    </div>
  );
}

export default App;
