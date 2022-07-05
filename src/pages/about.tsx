import { useEffect, useRef, useState } from "react";
import Form from "../components/Form/Form";
import Layout from "../components/Layout/Layout";
import { getBaseUrl } from "../utils/index";

interface IUser {
  id: number;
  name: string;
  age: number;
}

const Details = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      console.log("useEffect starting");

      const getUsers = async () => {
        const data = await fetch(`${getBaseUrl()}/api/users`);
        const users = await data.json();

        setUsers(users);
        console.log("fetching");
      };

      getUsers();

      return () => {
        console.log("unmount");
        ref.current = true;
      };
    }
  }, []);

  return (
    <Layout>
      <>
        <h1>About</h1>
        <Form />
        {JSON.stringify(users)}
      </>
    </Layout>
  );
};

export default Details;
