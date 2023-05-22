import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Repositorys({ repository }: { repository: any }) {
  useEffect(() => {
    // console.log(repository);
  }, [repository]);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={repository.owner.avatar_url}
        alt={repository.owner.avatar_url + "image"}
      />
      <Card.Body>
        <Card.Title>{repository.name}</Card.Title>
        <Card.Text>{repository.description}</Card.Text>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Repositorys;
