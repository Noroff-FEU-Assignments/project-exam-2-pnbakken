import React from "react";
import { Form } from "react-bootstrap";
import useSearchAllFromApi from "../../../Hooks/use-search-all-from-api";

function SearchMenu() {
  const results = useSearchAllFromApi("test");
  return (
    <div className="search-menu">
      <Form.Control type="text"></Form.Control>
    </div>
  );
}

export default SearchMenu;
