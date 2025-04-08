import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api/api";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getUsers(token).then(res => setUsers(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id, token).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Users</h2>
      {users.map(user => (
        <div key={user.id} className="border p-2 my-2">
          <p>{user.full_name} ({user.email})</p>
          <button onClick={() => handleDelete(user.id)} className="text-red-500">Delete</button>
        </div>
      ))}
    </div>
  );
}
