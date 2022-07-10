import React from "react";
import { useContext } from "react";
import userContext from "../context/userContext";

const Home = () => {
  const user = useContext(userContext);
  console.log(user);
  return <div>Home</div>;
};

export default Home;
