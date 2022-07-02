import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}

const Home: NextPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users: IUser[] = await res.json();

      setUsers(users);
    }

    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul style={{ listStyle: "none" }}>
        {users.length &&
          users.map((user) => {
            return (
              <li
                key={user.id}
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <Link href={`/users/${user.id}`}>
                  <a>
                    <h3>{user.name}</h3>
                    <h5>{user.email}</h5>
                  </a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
