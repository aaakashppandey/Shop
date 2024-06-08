import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartSubMenu from "./CartSubMenu";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems, 'cartItems')
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="border border-l-purple-900 p-1 m-1 rounded-lg bg-blue-300"
        onClick={handleClearCart}
      >
        Clear
      </button>
      <div className="w-6/12 m-auto">
        <CartSubMenu items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
