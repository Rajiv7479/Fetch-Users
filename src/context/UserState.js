import { useEffect, useState } from "react";
import UserContext from "./userContext";
import axios from "axios";

const UserState = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const usr = await axios.get("https://reqres.in/api/users?page=2");
      setUser(usr.data.data);
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserState;
