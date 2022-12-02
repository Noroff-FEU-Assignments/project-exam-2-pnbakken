import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

function TagInput({ tagHandler, edit }) {
  useEffect(() => {
    if (edit) {
      tagHandler(edit);
    }
  }, []);

  const [tags, setTags] = useState(edit ? edit : []);
  const [tagDisplay, setTagDisplay] = useState(
    tags ? (
      <ul className="tag-list no-list-style flex-r gap-xs wrap">
        {tags.map((tag) => {
          return <Tag tag={tag} removeThis={deleteTag} />;
        })}
      </ul>
    ) : (
      <></>
    )
  );

  function displayTags(tags) {
    setTagDisplay(
      <ul className="tag-list no-list-style flex-r gap-xs wrap">
        {tags.map((tag) => {
          return <Tag tag={tag} removeThis={deleteTag} />;
        })}
      </ul>
    );
  }

  const hasTag = (tag) => {
    let check = false;
    tags.forEach((t) => (t === tag ? (check = true) : undefined));
    return check;
  };
  function checkInput(e) {
    // key === "," doesn't work in Chrome on Android. I don't know about iPhones. Firefox on Android is ok. I had some keycodes I was testing but this is the only way so far that works consistently

    if (e.key === ",") {
      const tag = e.target.value
        .trim()
        .split(",")[0]
        .split(" ")[0]
        .trim(/[" "]/)
        .replace(/[^a-åA-Å0-9-]/g, "");
      if (tag) {
        let newTags = [];
        if (tags) {
          newTags = tags;
          if (!hasTag(tag)) {
            newTags.push(tag);
          }
        } else {
          newTags.push(tag);
        }
        setTags(newTags);
        e.target.value = "";
        tagHandler(newTags);
        displayTags(newTags);
      }
    }
  }

  function deleteTag(tag) {
    if (tags) {
      const newTags = tags.filter((t) => t !== tag);
      setTags(newTags);
      tagHandler(newTags);
      displayTags(newTags);
    }
  }

  return (
    <div className="tag-menu flex-c">
      <div>{tags && tagDisplay}</div>
      <Form.Control
        type="text"
        onKeyUp={checkInput}
        placeholder="Enter tag and press ','"
      ></Form.Control>
    </div>
  );
}

TagInput.propTypes = {
  tagHandler: PropTypes.func.isRequired,
  edit: PropTypes.array,
};

export default TagInput;

function Tag({ tag, removeThis }) {
  function deleteTag() {
    removeThis(tag);
  }
  return (
    <li className="tag flex-r gap-xxs small-text" key={tag}>
      {tag}
      <button type="button" className="discrete" onClick={deleteTag}>
        x
      </button>
    </li>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  removeThis: PropTypes.func.isRequired,
};
