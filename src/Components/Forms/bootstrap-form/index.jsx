import React from "react";
import { Container, Form } from "react-bootstrap";
import PropTypes from "prop-types";

import "./index.style.scss";

function BootstrapForm({ children, onSubmit, className = "", id = "" }) {
  return (
    <Container>
      <Form onSubmit={onSubmit} className={`system-form ${className}`} id={id}>
        {children}
      </Form>
    </Container>
  );
}

BootstrapForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default BootstrapForm;
