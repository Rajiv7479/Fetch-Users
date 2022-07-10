import React from "react";
import { useContext } from "react";
import userContext from "../context/userContext";
import { Container } from "@mui/system";
import "./style.css";
import User from "./User";

const Home = () => {
  const userList = useContext(userContext);
  console.log(userList.data);

  const users = userList.data;

  return (
    <>
      <Container container maxWidth={"lg"} className="container">
        <div className="title">User List</div>
        {users &&
          users.map((user) => {
            return (
              <div className="user" key={user.id}>
                <User user={user} />
              </div>
            );
          })}
      </Container>
    </>
  );
};

export default Home;
