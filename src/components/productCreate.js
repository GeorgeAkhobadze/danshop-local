import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const ProductCreate = () => {
  const { productId } = useParams();
  const [workshop, setWorkshop] = useState(null);
  const product = JSON.parse(localStorage.getItem("products"))[productId];
  const navigate = useNavigate();
};

export default ProductCreate;
