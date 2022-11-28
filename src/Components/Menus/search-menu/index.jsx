import React from "react";
import { Form } from "react-bootstrap";
import useAllFromApi from "../../../Hooks/use-all-from-api";

function SearchMenu() {
  const { data, loading, error } = useAllFromApi();
  return (
    <div className="search-menu">
      <Form.Control type="text"></Form.Control>
    </div>
  );
}

export default SearchMenu;
