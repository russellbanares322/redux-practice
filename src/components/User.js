import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  ascendUser,
  descendUser,
  searchUser,
  handleSrchChange,
} from "../features/user/userSlice";

const User = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
  });
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(searchUser(search));
  }, []);
  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  const users = useSelector((state) => state.user.users);
  const fName = useSelector((state) => state.user.firstname);
  const lName = useSelector((state) => state.user.lastname);

  const handleAddNewUser = () => {
    dispatch(
      addUser({
        id: Math.floor(Math.random() * 1000),
        first_name: userInput.firstName,
        last_name: userInput.lastName,
      })
    );

    setUserInput({
      firstName: "",
      lastName: "",
    });
    console.log(users);
  };

  const handleDeleteUser = (val) => {
    dispatch(deleteUser({ id: val.id }));
    alert(`Successfully deleted ${val.first_name}`);
  };

  const change = (e) => {
    dispatch(handleSrchChange({ name: e.target.name, value: e.target.value }));
  };

  console.log(users);
  return (
    <div>
      {fName}
      {lName}
      <input name="firstname" type="text" onChange={change} />
      <input name="lastname" type="text" onChange={change} />
      <hr />
      <input value={search} onChange={handleSearch} type="text" />
      <button onClick={() => dispatch(ascendUser())}>Ascend</button>
      <button onClick={() => dispatch(descendUser())}>Descend</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          value={userInput.firstName}
          name="firstName"
          type="text"
          onChange={handleChange}
        />
        <input
          value={userInput.lastName}
          name="lastName"
          type="text"
          onChange={handleChange}
        />
        <button style={{ marginTop: "1rem" }} onClick={handleAddNewUser}>
          Add
        </button>
        <h1 style={{ marginTop: "1rem" }}>Users</h1>
        {users?.map((val) => (
          <ul key={val?.id}>
            <li>{val?.first_name}</li>
            <li>{val?.last_name}</li>
            <button onClick={() => handleDeleteUser(val)}>Delete</button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default User;
