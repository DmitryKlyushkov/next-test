import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import Image from "next/future/image";

import styles from "../../styles/Home.module.scss";

const Details = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div>
        <div>
          <Image
            src="https://citilab.ru/upload/resize_cache/webp/upload/iblock/f85/f85863a65cd5448f5e3702e8dfdc4dde.webp"
            alt="city lab"
            priority
          />
        </div>

        <h1>Users</h1>
        <ul className={styles.ul}>
          {users.map((user: IUser) => {
            return (
              <li key={user.id} className={styles.li}>
                <Link href={`/users/${user.id}`}>
                  <a>
                    <Image
                      src="https://simpl.info/webp/cherry.webp"
                      alt="cherry"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="/user.jpg"
                      alt="user image"
                      width={50}
                      height={50}
                    />
                    <h3>{user.name}</h3>
                    <h5>{user.email}</h5>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Image
            src="https://thumb.tildacdn.com/tild3639-6666-4961-b063-623462616135/-/format/webp/kaboompics_A_woman_i.jpg"
            alt="image"
          />
        </div>
      </div>
    </Layout>
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

export default Details;
