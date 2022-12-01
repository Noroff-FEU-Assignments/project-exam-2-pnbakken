import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { POSTS_URL } from "../../../../../Constants";
import createAxios from "../../../../../Functions/create-axios";
import RefreshContext from "../../../../../Context/refresh-context";
import { Button, Modal } from "react-bootstrap";

function DeletePost({ id, auth, close }) {
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleShowConfirm = () => setShowConfirm(!showConfirm);
  async function doDelete() {
    try {
      const url = POSTS_URL + "/" + id;
      const client = createAxios(auth);
      const response = await client.delete(url);
      setRefresh(!refresh);
      close();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <button onClick={handleShowConfirm}>delete post</button>
      <Modal show={showConfirm} onHide={handleShowConfirm}>
        <Modal.Body className="p-3 flex-c align-center full-width gap-sm">
          Are you sure you want to delete your lovely post?
          <div className="flex-r full-width justify-between">
            <Button variant="secondary" onClick={handleShowConfirm}>
              No, cancel that
            </Button>
            <Button variant="danger" onClick={doDelete}>
              Yes, delete it
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

DeletePost.propTypes = {
  id: PropTypes.number.isRequired,
  auth: PropTypes.object.isRequired,
};

export default DeletePost;
