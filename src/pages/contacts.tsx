import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

const Details = () => {
  const [date, setDate] = useState<any>(null);

  useEffect(() => {
    const date = new Date();
    const dateFormat = Intl.DateTimeFormat(navigator.language, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);

    setDate(dateFormat);
  }, []);

  return (
    <Layout>
      <>
        <h1>Contacts</h1>
        <h3>Date: {date}</h3>
      </>
    </Layout>
  );
};

export default Details;
