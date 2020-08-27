import React, { useState, useEffect } from "react";

export const CRUDFunck = () => {
  const [user, setUser] = useState({ fname: "", lname: "" });
  const [users, setUsers] = useState([]);
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  //Will Excute Only Once - When application renders for First time
  useEffect(() => {
    let localStUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(localStUsers);
  }, []);

  //Excute will users Change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleSubmit = (event) => {
    // console.log(user);
    // setUser({ ...user, fname: "Ram", lname: "Kumar" });
    // console.log(user);

    setUsers([...users, user]);
  };
  return (
    <div>
      <form>
        <label htmlFor="fname">First Name :</label>
        <input
          type="text"
          name="fname"
          onChange={(event) => {
            handleChange(event);
          }}
          value={user.fname}
        />
        <br />
        <label htmlFor="lname">Last Name :</label>
        <input
          type="text"
          name="lname"
          onChange={(event) => {
            handleChange(event);
          }}
          value={user.lname}
        />
        <br />
        <button type="button" onClick={handleSubmit}>
          Get User
        </button>
      </form>
      <hr />
      {users.map((user, i) => {
        return (
          <p key={i}>
            {user.fname}-{user.lname}
          </p>
        );
      })}
    </div>
  );
};
