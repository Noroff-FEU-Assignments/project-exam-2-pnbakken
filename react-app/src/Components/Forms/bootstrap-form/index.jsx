import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

import "./index.style.scss";

function BootstrapForm({ children, onSubmit, className = "", id = "" }) {
  return (
    <Form onSubmit={onSubmit} className={`system-form ${className}`} id={id}>
      {children}
    </Form>
  );
}

BootstrapForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default BootstrapForm;
