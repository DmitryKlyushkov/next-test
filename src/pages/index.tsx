import type {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";

const Home = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Users</h1>
      <ul style={{ listStyle: "none" }}>
        {users.map((user: IUser) => {
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

interface IUser {
  id: number;
  name: string;
  email: string;
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: IUser[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default Home;
