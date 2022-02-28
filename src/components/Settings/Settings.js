import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../store/reducers/users"; // redux --> api route for testing purposes

const Settings = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <h1>Settings!</h1>
      <p>First User: {users[0]}</p>
    </>
  );
};

export default Settings;
