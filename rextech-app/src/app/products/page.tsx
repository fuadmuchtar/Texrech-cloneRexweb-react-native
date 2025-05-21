import CardProducts from "@/components/Card";
import { Container } from "react-bootstrap";

export default function Products() {
  return (
    <Container fluid={true} className="mt-5">
      <h1 className="text-center mb-4">All Product</h1>
      <CardProducts />
    </Container>
  );
}
