import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import useParams
import { useParams } from "react-router-dom";

const DetailUser = () => {
  const [data, setData] = useState(null);
  // call useParams to get params object
  const params = useParams();

  // don't worry about this, we'll cover later
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return () => {
      setData(null);
    };
  }, []);

  return (
    <Container className="text-center">
      <h1>Data user with parameter {params.id} is</h1>
      <br />
      <p className="h2">{data?.name}</p>
      <p>{data?.username}</p>
      <p>{data?.email}</p>
      <p>{data?.phone}</p>
      <p>{data?.website}</p>
    </Container>
  );
};

export default DetailUser;