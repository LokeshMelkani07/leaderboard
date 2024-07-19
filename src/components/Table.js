import React from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const users = useSelector((state) => state.users);
  const latestUserRef = useRef(null);

  // This ref will point to newUser added so that we can do dynamic scrolling
  useEffect(() => {
    if (latestUserRef.current) {
      latestUserRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Add the scaling class
      latestUserRef.current.classList.add("scale-up");

      // Remove the class after 3 seconds
      setTimeout(() => {
        if (latestUserRef.current) {
          latestUserRef.current.classList.remove("scale-up");
        }
      }, 3000);
    }
  }, [users]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>NAME</th>
            <th>TIME</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              ref={user.newUser === true ? latestUserRef : null}
              className={index < 10 ? "top-10" : ""}
            >
              <td className="indexes">{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
