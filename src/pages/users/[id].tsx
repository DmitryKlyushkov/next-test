import Link from "next/link";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";

const Details = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

interface IUser {
  id: number;
  name: string;
  email: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context?.params?.id}`
  );
  const user: IUser = await resp.json();

  // context.res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );

  return {
    props: {
      user,
    },
  };
};

export default Details;
