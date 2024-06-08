import { useDispatch } from "react-redux";
import { addItems, deleteItems } from "../utils/cartSlice";

const CartSubMenu=({items})=>{
    console.log(items,'insed cart')
    // Calling the useDispatch Hook to add items to the cartSlice.
  const dispatch = useDispatch();
  const handleItems = (data) => {
    dispatch(addItems(data));
  };
  const handleDelteItems = (data) => {
    dispatch(deleteItems(data));
  };
return (
    <div>
        {items.map((data) => {
              return (
                <div
                  key={data?.id}
                  className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                  <div className="w-9/12">
                    <div className="py-2">
                      <span>
                        {data.title}- ₹
                        {data.price}
                        
                      </span>
                    </div>
                    <p className="text-xs font-semibold">
                      {data.description}
                    </p>
                  </div>
                  <div className="w-3/12 p-4">
                    <div className="absolute">
                      <button
                        className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                        onClick={() => handleItems(data)}
                      >
                        Add
                      </button>
                      <button
                        className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                        onClick={() => handleDelteItems(data)}
                      >
                        Delete
                      </button>
                    </div>
                    <img
                      src={data.image}
                      className="w-full"
                    />
                  </div>
                </div>
              );
            })}
    </div>
)
}


export default CartSubMenu;