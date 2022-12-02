import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { USER_URL } from "../../../Constants";
import AuthContext from "../../../Context/auth-context";
import createAxios from "../../../Functions/create-axios";

function DeleteUser() {
  const [auth, setAuth] = useContext(AuthContext);

  async function runDelete() {
    const client = createAxios(auth);

    try {
      const response = await client.delete(USER_URL + `/${auth.name}`);
    } catch (error) {}
  }
  return (
    <Button variant="danger" onClick={runDelete}>
      Delete User
    </Button>
  );
}

export default DeleteUser;
