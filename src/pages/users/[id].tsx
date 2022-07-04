import Link from "next/link";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next/types";

import BackHomeButton from "../../components/BackHomeButton/BackHomeButton";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: IUser[] = await res.json();

  return {
    paths: users.map((user) => ({
      params: {
        id: user.id.toString(),
      },
    })),
    fallback: false,
  };
}

const Details = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <BackHomeButton />
      {user && (
        <div>
          <h2>User ID: {user?.id} is awesome</h2>
          <h3>user name: {user?.name}</h3>
          <h5>user email: {user?.email}</h5>
        </div>
      )}
    </>
  );
};

interface IUser {
  id: number;
  name: string;
  email: string;
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context?.params?.id}`
  );
  const user: IUser = await resp.json();

  return {
    props: {
      user,
    },
    revalidate: 30,
  };
};

export default Details;
