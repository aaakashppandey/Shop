import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleItems = (data) => {
    dispatch(addItems(data));
  };
  return (
    <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <h3 className="font-bold py-4 truncate text-lg">{data.title}</h3>
      <div className="w-32 h-32 mb-4">
        <img
          src={data.image}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h4>{data.rating.rate}</h4>
      <h4>{data.price}</h4>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => handleItems(data)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ItemCard;
