import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./slices/usersSlice";
import { MdClose } from "react-icons/md";

const Popup = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: Date.now(), username, score, newUser: true }));
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          <MdClose />
        </button>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Score:
            <input
              type="text"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              pattern="\d{2}:\d{2}:\d{3}"
              placeholder="(example 02:23:456)"
              required
            />
          </label>
          <button type="submit">Add Score</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
