import Link from "next/link";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next/types";

const Details = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export async function getStaticPaths(context: GetStaticPropsContext) {
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
  };
};

export default Details;
