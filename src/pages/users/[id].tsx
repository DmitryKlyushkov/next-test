import Link from "next/link";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import { useState, useEffect } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}

const Details: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function getUser() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const user: IUser = await res.json();

      setUser(user);
    }

    if (id) {
      getUser();
    }
  }, [id]);

  return (
    <>
      <Link href="/">
        <a>Home page</a>
      </Link>
      {user && (
        <div>
          <h3>user name: {user?.name}</h3>
          <h5>user email: {user?.email}</h5>
        </div>
      )}
    </>
  );
};

export default Details;
