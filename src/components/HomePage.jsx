import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setShopData(json);
  };
  useEffect(() => {
    console.log(shopData, "shopData12");
  }, [shopData]);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-wrap">
      <Link to={"/cart"}>Cart Item(s) {cartItems.length}</Link>

      {shopData &&
        shopData.map((data, index) => {
          console.log(data, "data of card");
          return <ItemCard data={data} key={index} />;
        })}
    </div>
  );
};

export default HomePage;
