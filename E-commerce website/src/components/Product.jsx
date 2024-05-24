import { useState } from "react";
import "./Product.css"; // Import the CSS file
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { remove ,add } from "../redux/slice/Cartslice";

function Product({ post }) {
    const [selected, setSelected] = useState(false);
    const { cart } = useSelector((state) => (state))
    const dispatch=useDispatch();

    function addtocart(){
        dispatch(add(post));
        toast.success("Item Add to cart succesfully")
        
    }
    function removecart(){
        dispatch(remove(post.id))
        toast.error("Remove from the cart")
    }

 

    return (
        <div className="product-card">
            <div className="product-title">
                <p>{post.title}</p>
            </div>
            <div className="product-description">
                <p>{post.description}</p>
            </div>
            <div className="product-image">
                <img src={post.image} alt={post.title} />
            </div>
            <div className="product-price">
                <p>${post.price}</p>
            </div>
            <div>
                {/* <button className="product-button" onClick={() => setSelected(!selected)}>
                    {selected ? <p>Remove from Cart</p> : <p>Add to Cart</p>}
                </button> */}
                {
                    cart.some((p) => p.id === post.id) ?
                        (
                            <button className="product-button" onClick={removecart}>
                                <p>Remove from Cart</p>
                            </button>
                        ):
                        (
                            <button className="product-button" onClick={addtocart}>
                            <p>Add to Cart</p>
                        </button>
                        )
                }


            </div>
        </div>
    );
}

export default Product;
