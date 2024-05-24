import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import "./Product.css"; // Import the CSS file

import { remove } from "../redux/slice/Cartslice";

function Carditem({ item, itemindex }) {
  const dispatch = useDispatch();

  function removefromcart() {
    dispatch(remove(item.id));
    toast.success("remove Succesfully");
  }

  return (
    <div className="product-card"> {/* Change class name */}
      <div className="product-image"> {/* Change class name */}
        <img src={item.image} alt="" />
      </div>
      <div className="product-details"> {/* Change class name */}
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <p className="product-price">{item.price}</p> {/* Change class name */}
      </div>
      <button className="product-button" onClick={removefromcart}> {/* Change class name */}
        <AiFillDelete />
      </button>
    </div>
  );
}

export default Carditem;
