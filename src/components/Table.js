import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const users = useSelector((state) => state.users);

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
            <tr key={user.id} className={index < 10 ? "top-10" : ""}>
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
