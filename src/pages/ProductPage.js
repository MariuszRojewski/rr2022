import React from "react";
import { Link } from "react-router-dom";
import Products from "../components/Product";

const ProductPage = ({ match }) => {
  return (
    <>
      <div>Strona porduktowa</div>
      <Products name={match.params.name} />
      <Link to="/products">Powrót do listy porduktów</Link>
    </>
  );
};

export default ProductPage;
